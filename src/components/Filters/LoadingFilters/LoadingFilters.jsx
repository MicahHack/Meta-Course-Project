import Shimmer from './../../Shimmer/Shimmer.jsx';
import ShimmerConfig from './../../../models/ShimmerConfig.js';

export default function LoadingFilters() {
    const headerShimmer = new ShimmerConfig("50px", "290px", "10");
    const verseShimmer = new ShimmerConfig("120px", "290px", "10");
    const buttonShimmer = new ShimmerConfig("37.6px", "41.6", "60");

    return (
        <>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-5 mb-md-0">
                <Shimmer></Shimmer>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                <Shimmer shimmerConfig={headerShimmer}></Shimmer>
                <div className="mt-3">
                    <Shimmer shimmerConfig={verseShimmer}></Shimmer>
                </div>
                <div className="d-flex flex-row justify-content-around align-items-center mt-3">
                    <div className="me-2">
                        <Shimmer shimmerConfig={buttonShimmer}></Shimmer>
                    </div>
                    <div className="ms-2 my-4">
                     <Shimmer shimmerConfig={buttonShimmer}></Shimmer>
                    </div>
                </div>
            </div>
        </>
    )
}