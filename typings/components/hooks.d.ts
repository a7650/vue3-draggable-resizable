import { Ref } from 'vue';
declare type DragHandleFn = ({ x, y }: {
    x: number;
    y: number;
}) => void;
interface Params {
    dragStart?: DragHandleFn;
    dragEnd?: DragHandleFn;
    dragging?: DragHandleFn;
    x?: Ref<number>;
    y?: Ref<number>;
    autoUpdate?: boolean;
    unselect?: () => void;
    enable?: Ref<boolean>;
}
export declare function useDraggableContainer(options?: Params): {
    containerRef: Ref<HTMLDivElement>;
};
export declare function useState<T>(initialState: T): [Ref<T>, (value: T) => void];
export declare function watchProperties(props: any, emit: any): {
    width: Ref<number>;
    setWidth: (value: number) => void;
    height: Ref<number>;
    setHeight: (value: number) => void;
    top: Ref<number>;
    setTop: (value: number) => void;
    left: Ref<number>;
    setLeft: (value: number) => void;
    enable: Ref<boolean>;
    setEnable: (value: boolean) => void;
    dragging: Ref<boolean>;
    setDragging: (value: boolean) => void;
    resizing: Ref<boolean>;
    setResizing: (value: boolean) => void;
};
export {};
