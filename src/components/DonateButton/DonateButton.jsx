import { useEffect, useState } from 'react';
import './DonateButton.css';
import { getIpv4Country } from './../../services/LocationService';

export default function DonateButton() {
    const [donationsUrl, setDonationsUrl] = useState("https://buy.stripe.com/aFadRb9QcapebwfbnieIw00");
    useEffect(() => {
        async function getCountry() {
            let result = await getIpv4Country();
            if (result.success) {
                if (result.data.country === "South Africa") {
                    await setDonationsUrl("https://donate.stripe.com/fZu8wRd2oeFu6bV1MIeIw01");
                }
            }
        }
        getCountry();
    }, []);

    return (
        <>
            <div className="donate-container d-flex flex-column align-items-center my-4">
                <span className="mb-2 text-white fw-bold">Support our mission</span>
                <button className="btn btn-primary text-white px-5 shadow donate-btn" onClick={() => { window.open(donationsUrl, "_self") }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-heart-fill me-2" viewBox="0 0 16 16">
                        <path d="M8 2.748-.717-.737C5.6-.281 8 .522 8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    Donate
                </button>
                {/* <button className="btn btn-warning btn-lg rounded-pill px-5 shadow donate-btn" onClick={() => window.open(donationsUrl, "_self")}style={{ fontWeight: 'bold', fontSize: '1.25rem' }}></button> */}
            </div>
        </>
    )
}
