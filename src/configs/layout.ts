const FEATURE = 'feature';
const FEATURE_COLLECTION = 'feature-collection';
const EXPLAINER = 'explainer';
const MULTI = 'multi';
const CAROUSEL = 'carousel';

export const layout = [
    {
        type: FEATURE,
        key: 'displayData'
    },
    {
        type: FEATURE,
        key: 'dataAnalysis'
    },
    {
        type: FEATURE,
        key: 'context'
    },
    {
        type: FEATURE,
        key: 'accessible'
    },
    {
        type: FEATURE,
        key: 'mobile'
    },
    {
        type: FEATURE_COLLECTION,
        keys: ['implement', 'dataExtraction', 'plugins']
    },
    {
        type: EXPLAINER,
        key: 'main',
        sections: [
            ['accessible', 'responsive', 'plugins'],
            ['integrate', 'customizable', 'openSource']
        ]
    },
    {
        type: CAROUSEL
    },
    {
        type: MULTI,
        key: 'upcoming',
        sections: ['interface', 'developer', 'fast']
    }
];
