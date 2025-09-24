import { useDraggable } from "@dnd-kit/core"
import type { IssuesType } from "../../store/Types"

type CardProps = {
    item: IssuesType
}

export const TaskCard = ({ item }: CardProps) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: item.id
    })
    const style =
        transform ?
            {
                transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
            }
        :   undefined
    return (
        <section
            style={style}
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            id={String(item.id)}
            className="mt-2 flex h-[5rem] cursor-pointer items-center justify-center rounded-lg border-1 bg-neutral-700"
        >
            <h1 className="text-xl font-semibold tracking-wider text-neutral-200 text-shadow-black text-shadow-sm">
                {item.description}
            </h1>
        </section>
    )
}
