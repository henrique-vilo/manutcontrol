import dados from "@/manutcontrol_dados.json"

export default function Header(){
    return(

    <header className="bg-gray-100">

    <div className="w-full min-h-15 flex flex-col lg:flex-row justify-end items-center border-gray-200">
        <div className="w-2/6 h-auto flex justify-center items-center gap-8">

            <img src="/notificacao.svg" alt="" className="size-6"/>
            
            <div className="flex flex-col lg:flex-row justify-center items-center gap-1">

            <img src="/perfil.png" alt="" className="size-13"/>
            <p className="text-black text-m">{dados.usuario}</p>
            <select name="" id="" className="text-black"></select>

            </div>
        </div>
    </div>

</header>
)
}