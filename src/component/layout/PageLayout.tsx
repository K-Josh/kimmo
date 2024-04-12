
interface AppContainerProps {
    pageTitle?: string,
    children: React.ReactNode,
}

function PageLayout(props: AppContainerProps) {
    return (
        <div className=" p-[1rem] mx-auto flex flex-col items-center min-h-[75vh]">
            <div className="w-24">
                <h2 className="text-[1rem] lg:text-[2rem]">{props.pageTitle}</h2>
            </div>
            <div className='w-[50%]'>{props.children}</div>
        </div>
    )
}

export default PageLayout
