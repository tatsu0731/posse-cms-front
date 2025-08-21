export default function Title({title}: {title: string}) {
    return(
        <h2 className="scroll-m-20 py-4 pl-4 border-b pb-2 text-2xl font-semibold tracking-tight bg-gray-100 first:mt-0">
            {title}
        </h2>
    )
}