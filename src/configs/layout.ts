const FEATURE = 'feature';
const EXPLAINER = 'explainer';
const MULTI = 'multi';

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
        key: 'dataExtraction'
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
        type: FEATURE,
        key: 'implement'
    },
    {
        type: FEATURE,
        key: 'plugins'
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
        type: MULTI,
        key: 'upcoming',
        sections: ['interface', 'developer', 'fast']
    }
];
