import Logo from "../../assets/images/logo.svg";

export default function Banner({text}) {
    return(
        <div className="bg-[#464646] w-[350px] h-[160px] rounded-md">
            <div className="flex gap-3">
                <div><img src={Logo} className="h-[126px] w-[179px]"/></div>
                <div><h2 className="text-green-700 font-semibold text-lg underline underline-offset-2 mt-[1.2rem]">{text}</h2></div>
            </div>
        </div>
    )
}