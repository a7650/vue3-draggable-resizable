import { Ref } from 'vue';
import './index.css';
import { ResizingHandle, ContainerProvider } from './types';
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
    disabledX: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledY: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledW: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledH: {
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
    lockAspectRatio: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    handlesFiltered: import("vue").ComputedRef<ResizingHandle[]>;
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
    parentWidth: Ref<number>;
    parentHeight: Ref<number>;
    id: string;
    width: Ref<number>;
    height: Ref<number>;
    top: Ref<number>;
    left: Ref<number>;
    enable: Ref<boolean>;
    dragging: Ref<boolean>;
    resizing: Ref<boolean>;
    resizingHandle: Ref<ResizingHandle>;
    resizingMaxHeight: Ref<number>;
    resizingMaxWidth: Ref<number>;
    resizingMinWidth: Ref<number>;
    resizingMinHeight: Ref<number>;
    aspectRatio: import("vue").ComputedRef<number>;
    setEnable: (value: boolean) => boolean;
    setDragging: (value: boolean) => boolean;
    setResizing: (value: boolean) => boolean;
    setResizingHandle: (value: ResizingHandle) => ResizingHandle;
    setResizingMaxHeight: (value: number) => number;
    setResizingMaxWidth: (value: number) => number;
    setResizingMinWidth: (value: number) => number;
    setResizingMinHeight: (value: number) => number;
    $setWidth: (val: number) => number;
    $setHeight: (val: number) => number;
    $setTop: (val: number) => number;
    $setLeft: (val: number) => number;
    containerRef: Ref<HTMLElement>;
    containerProvider: ContainerProvider;
}, unknown, {
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
    w: number;
    h: number;
    draggable: boolean;
    resizable: boolean;
    initW: number;
    initH: number;
    disabledX: boolean;
    disabledY: boolean;
    disabledW: boolean;
    disabledH: boolean;
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
    lockAspectRatio: boolean;
} & {}>, {
    active: boolean;
    x: number;
    y: number;
    w: number;
    h: number;
    draggable: boolean;
    resizable: boolean;
    initW: number;
    initH: number;
    disabledX: boolean;
    disabledY: boolean;
    disabledW: boolean;
    disabledH: boolean;
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
    lockAspectRatio: boolean;
}>;
export default VueDraggableResizable;
