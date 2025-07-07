import { useState, useRef, useEffect } from 'react';
import './Filters.css';
import { getBibleQuote, filterAvailableQuotes } from './../../services/BibleService';
import LoadingFilters from './LoadingFilters/LoadingFilters';

export default function Filters() {
    const [testament, setTestament] = useState([
        { id: 0, text: "Old", active: false },
        { id: 1, text: "Any", active: true },
        { id: 2, text: "New", active: false },
    ]);
    const [type, setType] = useState([
        { id: 0, text: "Any", active: true },
        { id: 1, text: "Motivational", active: false },
        { id: 2, text: "Wisdom", active: false }
    ]);
    const [step, setStep] = useState(1);
    const [isTransitioning, setTransitioning] = useState(false);
    const [quote, setQuote] = useState({ reference: "", text: "" });

    const filtersContainer = useRef(null);
    let filtersContainerOpacity = useRef(0);

    function animateFiltersComponent(visible) {
        // If the Filters Component is well within view of the user, fade in, else fade out.
        if (visible) {
            if (filtersContainerOpacity.current < 1.0) {
                filtersContainerOpacity.current += 0.1;
                filtersContainer.current.style.opacity = filtersContainerOpacity.current;
                requestAnimationFrame(() => { animateFiltersComponent(true) });
            }
        }
        if (!visible) {
            if (filtersContainerOpacity.current > 0.0) {
                filtersContainerOpacity.current -= 0.1;
                filtersContainer.current.style.opacity = filtersContainerOpacity.current;
                requestAnimationFrame(() => { animateFiltersComponent(false) });
            }
        }
    }

    function transitionSection(step) {
        // Simple stepping procedure used for conditional rendering of HTML to show different filtering questions
        setTransitioning(true);
        setTimeout(() => { setStep(step); setTransitioning(false); }, 250);
    }

    function updateTestament(id) {
        let newState = testament.map((item) => {
            return { ...item, active: item.id === id };
        });
        setTestament(newState);
    }

    function updateType(id) {
        let newState = type.map((item) => {
            return { ...item, active: item.id === id };
        });
        setType(newState);
    }

    async function retrieveQuote() {
        transitionSection(3);
        let selectedTestament = testament.find((item) => item.active);
        let selectedType = type.find((item) => item.active);
        let availableQuotes = await filterAvailableQuotes(selectedTestament.text, selectedType.text);
        let selectedQuote = await getBibleQuote(availableQuotes[Math.floor(Math.random() * availableQuotes.length + 1)].reference);
        setQuote({ reference: selectedQuote.reference, text: selectedQuote.text });
        transitionSection(4);
    }

    useEffect(() => {
        // Set Filters to transparent.
        filtersContainer.current.style.opacity = filtersContainerOpacity.current;
        // scroll event listener for fading filters in/out
        document.addEventListener("scroll", () => {
            if (window.scrollY > 228) {
                requestAnimationFrame(() => { animateFiltersComponent(true) });
            }
            if (window.scrollY <= 228) {
                requestAnimationFrame(() => { animateFiltersComponent(false) });
            }
        })
    }, []);

    return (
        <>
            <div ref={filtersContainer} style={{ transition: "0.25s ease-in-out" }} className="container-fluid mt-5 my-md-5 px-3 px-md-5">
                <div className={`row align-items-center pt-5 py-md-5 ${isTransitioning ? "fadeout" : "fadein"}`}>
                    {/* Testaments section */}
                    {step == 1 &&
                        <>
                        <div className="col-12 col-md-6 text-center mb-5 mb-md-0">
                            <img src="Testimonials.png" alt="" style={{ height: "350px", width: "350px", borderRadius: "7px" }} />
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                            <h2>Testaments</h2>
                            <div>
                                {testament.map((item) => {
                                    return <button key={item.id} type="button" className={`btn ${item.active ? "btn-dark" : "btn-light"} m-2 m-md-3`} onClick={() => updateTestament(item.id) }>{item.text}</button>
                                })}
                            </div>
                            <div className="d-flex flex-row justify-content-center align-items-center my-4">
                                <button type="button" className="btn btn-outline-primary rounded-circle mx-3" onClick={() => transitionSection(2) }>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </>
                    }
                    {/* Type section */}
                    {(step == 2) &&
                        <>
                        <div className="col-12 col-md-6 text-center mb-5 mb-md-0">
                                <img src="Type.png" style={{ height: "350px", width: "300px", borderRadius: "7px" }} />
                            </div>
                        <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                                <h2>Type</h2>
                                <div>
                                    {type.map((item) => {
                                        return <button key={item.id} type="button" className={`btn ${item.active ? "btn-dark" : "btn-light"} m-2 m-md-3`} onClick={() => updateType(item.id)}>{item.text}</button>
                                    })}
                            </div>
                                <div className="d-flex flex-row justify-content-center align-items-center my-5">
                                <button type="button" className={`btn btn-outline-secondary rounded-circle mx-3`} onClick={() => transitionSection(1) }>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                        </svg>
                                    </button>
                                <button type="button" className="btn btn-outline-primary rounded-circle mx-3" onClick={() => { setTransitioning(true); setTimeout(() => { setTransitioning(false); retrieveQuote() }, 250); }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </>
                    }
                    {/* Loading section */}
                    {(step == 3) &&
                        <LoadingFilters />
                    }
                    {/* Results section */}
                    {(step == 4) &&
                        <>
                            <div className="col text-center mb-5 mb-md-0">
                                <img src="JesusBlackandWhite.jpg" style={{ height: "380px", width: "300px", borderRadius: "7px" }} />
                            </div>
                            <div className="col d-flex flex-column align-items-center text-center">
                                <h2>{ quote.reference }</h2>
                                <p>{ quote.text }</p>
                                <div className="d-flex flex-row justify-content-center align-items-center my-5">
                                    <button type="button" className={`btn btn-outline-secondary rounded-circle mx-3`} onClick={() => { transitionSection(2) }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                        </svg>
                                    </button>
                                    <button type="button" className="btn btn-outline-primary rounded-circle mx-3" onClick={() => retrieveQuote()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16" >
                                            <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </>
                    }
                    </div>
            </div>
            
        </>
    )
}