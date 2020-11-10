import './index.css';
export declare type ResizingHandle = 'tl' | 'tm' | 'tr' | 'ml' | 'mr' | 'bl' | 'bm' | 'br' | '';
declare const VueDraggableResizable: import("vue").DefineComponent<{
    initW: {
        type: NumberConstructor;
        default: any;
    };
    initH: {
        type: NumberConstructor;
        default: any;
    };
    w: {
        type: NumberConstructor;
        default: number;
    };
    h: {
        type: NumberConstructor;
        default: number;
    };
    x: {
        type: NumberConstructor;
        default: number;
    };
    y: {
        type: NumberConstructor;
        default: number;
    };
    draggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    minW: {
        type: NumberConstructor;
        default: number;
    };
    minH: {
        type: NumberConstructor;
        default: number;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    parent: {
        type: BooleanConstructor;
        default: boolean;
    };
    handles: {
        type: ArrayConstructor;
        default: string[];
    };
}, {
    setWidth(val: number): void;
    setHeight(val: number): void;
    setTop(val: number): void;
    setLeft(val: number): void;
    minWidth: import("vue").ComputedRef<number>;
    minHeight: import("vue").ComputedRef<number>;
    maxWidth: import("vue").ComputedRef<number>;
    maxHeight: import("vue").ComputedRef<number>;
    minLeft: import("vue").ComputedRef<number>;
    minTop: import("vue").ComputedRef<number>;
    maxLeft: import("vue").ComputedRef<number>;
    maxTop: import("vue").ComputedRef<number>;
    parentWidth: import("vue").Ref<number>;
    parentHeight: import("vue").Ref<number>;
    width: import("vue").Ref<number>;
    height: import("vue").Ref<number>;
    top: import("vue").Ref<number>;
    left: import("vue").Ref<number>;
    enable: import("vue").Ref<boolean>;
    dragging: import("vue").Ref<boolean>;
    resizing: import("vue").Ref<boolean>;
    resizingHandle: import("vue").Ref<ResizingHandle>;
    setEnable: (value: boolean) => void;
    setDragging: (value: boolean) => void;
    setResizing: (value: boolean) => void;
    setResizingHandle: (value: ResizingHandle) => void;
    $setWidth: (value: number) => void;
    $setHeight: (value: number) => void;
    $setTop: (value: number) => void;
    $setLeft: (value: number) => void;
    containerRef: import("vue").Ref<HTMLElement>;
}, {}, {
    style(): {
        [propName: string]: string;
    };
    klass(): {
        [propName: string]: string | boolean;
    };
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    active: boolean;
    x: number;
    y: number;
    initW: number;
    initH: number;
    w: number;
    h: number;
    draggable: boolean;
    resizable: boolean;
    minW: number;
    minH: number;
    parent: boolean;
    handles: unknown[];
} & {}>, {
    active: boolean;
    x: number;
    y: number;
    initW: number;
    initH: number;
    w: number;
    h: number;
    draggable: boolean;
    resizable: boolean;
    minW: number;
    minH: number;
    parent: boolean;
    handles: unknown[];
}>;
export default VueDraggableResizable;
