export default function Button(props:any) {
    return (


        <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white  hover:bg-blue-700 focus:outline-none "
        >
            {props.text}
        </button>

    )
}
