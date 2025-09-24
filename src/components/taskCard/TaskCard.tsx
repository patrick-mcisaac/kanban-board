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
            className="flex h-[5rem] items-center justify-center border-1"
        >
            <h1 className="text-xl font-semibold tracking-wider">
                {item.description}
            </h1>
        </section>
    )
}
