declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    adsorbParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    adsorbCols: {
        type: ArrayConstructor;
        default: any;
    };
    adsorbRows: {
        type: ArrayConstructor;
        default: any;
    };
    referenceLineVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    referenceLineColor: {
        type: StringConstructor;
        default: string;
    };
}, {
    matchedRows: import("vue").ComputedRef<number[]>;
    matchedCols: import("vue").ComputedRef<number[]>;
}, unknown, {}, {
    renderReferenceLine(): any[];
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled: boolean;
    adsorbParent: boolean;
    adsorbCols: unknown[];
    adsorbRows: unknown[];
    referenceLineVisible: boolean;
    referenceLineColor: string;
} & {}>, {
    disabled: boolean;
    adsorbParent: boolean;
    adsorbCols: unknown[];
    adsorbRows: unknown[];
    referenceLineVisible: boolean;
    referenceLineColor: string;
}>;
export default _default;
