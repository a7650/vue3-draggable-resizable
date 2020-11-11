import './index.css';
export declare type ResizingHandle = 'tl' | 'tm' | 'tr' | 'ml' | 'mr' | 'bl' | 'bm' | 'br' | '';
export declare const ALL_HANDLES: ResizingHandle[];
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
        default: ResizingHandle[];
        validator: (handles: ResizingHandle[]) => boolean;
    };
    classNameDraggable: {
        type: StringConstructor;
        default: string;
    };
    classNameResizable: {
        type: StringConstructor;
        default: string;
    };
    classNameDragging: {
        type: StringConstructor;
        default: string;
    };
    classNameResizing: {
        type: StringConstructor;
        default: string;
    };
    classNameActive: {
        type: StringConstructor;
        default: string;
    };
    classNameHandle: {
        type: StringConstructor;
        default: string;
    };
}, {
    resizeHandleDrag: (e: MouseEvent) => void;
    resizeHandleUp: (e: MouseEvent) => void;
    resizeHandleDown: (e: MouseEvent, handleType: ResizingHandle) => void;
    setWidth(val: number): number;
    setHeight(val: number): number;
    setTop(val: number): number;
    setLeft(val: number): number;
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
    setEnable: (value: boolean) => boolean;
    setDragging: (value: boolean) => boolean;
    setResizing: (value: boolean) => boolean;
    setResizingHandle: (value: ResizingHandle) => ResizingHandle;
    $setWidth: (value: number) => number;
    $setHeight: (value: number) => number;
    $setTop: (value: number) => number;
    $setLeft: (value: number) => number;
    containerRef: import("vue").Ref<HTMLElement>;
}, {}, {
    style(): {
        [propName: string]: string;
    };
    klass(): {
        [propName: string]: string | boolean;
    };
    handlesFiltered(): ResizingHandle[];
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    active: boolean;
    x: number;
    y: number;
    draggable: boolean;
    resizable: boolean;
    initW: number;
    initH: number;
    w: number;
    h: number;
    minW: number;
    minH: number;
    parent: boolean;
    handles: unknown[];
    classNameDraggable: string;
    classNameResizable: string;
    classNameDragging: string;
    classNameResizing: string;
    classNameActive: string;
    classNameHandle: string;
} & {}>, {
    active: boolean;
    x: number;
    y: number;
    draggable: boolean;
    resizable: boolean;
    initW: number;
    initH: number;
    w: number;
    h: number;
    minW: number;
    minH: number;
    parent: boolean;
    handles: unknown[];
    classNameDraggable: string;
    classNameResizable: string;
    classNameDragging: string;
    classNameResizing: string;
    classNameActive: string;
    classNameHandle: string;
}>;
export default VueDraggableResizable;
