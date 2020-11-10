import './index.css';
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
}, {
    containerRef: import("vue").Ref<HTMLDivElement>;
    width: import("vue").Ref<number>;
    setWidth: (value: number) => void;
    height: import("vue").Ref<number>;
    setHeight: (value: number) => void;
    top: import("vue").Ref<number>;
    setTop: (value: number) => void;
    left: import("vue").Ref<number>;
    setLeft: (value: number) => void;
    enable: import("vue").Ref<boolean>;
    setEnable: (value: boolean) => void;
    dragging: import("vue").Ref<boolean>;
    setDragging: (value: boolean) => void;
    resizing: import("vue").Ref<boolean>;
    setResizing: (value: boolean) => void;
}, {}, {
    style(): {
        [propName: string]: string;
    };
    klass(): {
        [propName: string]: string | boolean;
    };
}, {
    unselect(e: Event): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
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
}>;
export default VueDraggableResizable;
