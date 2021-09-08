const FEATURE = 'feature';
const FEATURE_COLLECTION = 'feature-collection';
const EXPLAINER = 'explainer';
const MULTI = 'multi';
const CAROUSEL = 'carousel';

export const layout = [
    {
        type: FEATURE,
        key: 'displayData',
        config: 'sample_datatypes',
        index: '0'
    },
    {
        type: FEATURE,
        key: 'dataAnalysis',
        config: 'sample_mashups',
        index: '1'
    },
    {
        type: FEATURE,
        key: 'context',
        config: 'sample_context',
        index: '2'
    },
    {
        type: FEATURE,
        key: 'accessible',
        config: 'sample_accessibility',
        index: '3'
    },
    {
        type: FEATURE,
        key: 'mobile',
        config: 'sample_mobile',
        index: '4'
    },
    {
        type: FEATURE_COLLECTION,
        keys: ['implement', 'dataExtraction', 'plugins'],
        config: ['sample_implement', 'sample_clipnship', 'sample_plugins']
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
