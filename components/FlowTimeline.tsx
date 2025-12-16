import { ChecklistBuilder } from "./ChecklistBuilder";

export function FlowTimeline() {
    return (
        <section className="bg-bg">
            {/* The logic part is handled by ChecklistBuilder, this wrapper provides context if needed */}
            <ChecklistBuilder />
        </section>
    )
}
