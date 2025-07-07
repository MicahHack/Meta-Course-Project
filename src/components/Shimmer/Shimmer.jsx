import ShimmerConfig from './../../models/ShimmerConfig.js';

export default function Shimmer({ shimmerConfig }) {
    if (shimmerConfig instanceof ShimmerConfig) {
        console.log("shimmer config is right: " + shimmerConfig);
    }
    else {
        shimmerConfig = new ShimmerConfig();
    }

    return (
        <>
            <svg width={shimmerConfig.width} height={shimmerConfig.height} viewBox={`0 0 ${shimmerConfig.width.replace("px", "")} ${shimmerConfig.height.replace("px", "") }`}>
                <defs>
                    <linearGradient id="shimmer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="grey" />
                        <stop offset="25%" stop-color="grey" />
                        <stop offset="50%" stop-color="white" />
                        <stop offset="75%" stop-color="grey" />
                        <stop offset="100%" stop-color="grey" />
                        <animateTransform
                            id="animationTransformation"
                            attributeName="gradientTransform"
                            begin="0s;animationTransformation.end+1s"
                            type="translate"
                            from="-1, -1"
                            to="1.5, 1.5"
                            dur="0.8s"
                            repeatCount="1"
                            fill="freeze"
                        />
                    </linearGradient>
                </defs>
                <rect x="0" y="0" width={shimmerConfig.width} height={shimmerConfig.height} rx={shimmerConfig.borderRadius} ry={shimmerConfig.borderRadius} fill="url(#shimmer-gradient)" />
            </svg>
        </>
    )
}