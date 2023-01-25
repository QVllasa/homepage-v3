import {FaGithub, FaLinkedin} from "react-icons/fa";
import {useRouter} from "next/router";

export const LinkedinGithubComponent = () => {
    const router = useRouter()
    return (<div className={'flex gap-2 justify-center items-center'}>
        <FaLinkedin
            className={'w-5 h-5 text-3xl text-gray-400 hover:text-black cursor-pointer dark:text-slate-300 dark:hover:text-slate-100'}
            onClick={() => router.push('https://www.linkedin.com/in/qendrim-vllasa/')}/>
        <FaGithub
            className={'w-5 h-5 ml-3 text-3xl text-gray-400 hover:text-black cursor-pointer dark:text-slate-300 dark:hover:text-slate-100'}
            onClick={() => router.push('https://github.com/QVllasa')}/>
    </div>)
}
