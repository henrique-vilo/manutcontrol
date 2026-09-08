import dados from "@/manutcontrol_dados.json";

export default function Welcome(){
    const ordens = dados.ordensServico;

    const ordensAbertas = ordens.map((ordem) => ordem.status == "aberta")

    const ordensVencidas = ordens.map((ordem) => ordem.status == "vencida")


    const equipamentos = dados.equipamentos;

    const equipamentosParados = equipamentos.map(function(equipamento){
        return equipamento.status = "parado";
    })

    return(
        <>
        
            <div className="w-full flex flex-col lg:flex-row justify-between items-center md:gap-3 pt-10">

                <div className="w-80 h-auto flex flex-col md:ms-50">
                <p className="text-black text-2xl font-bold">Bom dia, {(dados.usuario).split(" ")[0]}</p>
                <p className="text-gray-400">Veja o que precisa de atenção hoje</p>
                </div>

                <button type="button" className="bg-blue-500 w-60 h-12 p-2 flex justify-center items-center gap-3 rounded-xl md:me-50">
                <img src="/add.svg" alt="" />
                <p className="text-white text-l">Nova Ordem</p>
                </button>

            </div>


            <div className="w-full min-h-10 flex flex-col lg:flex-row justify-start items-center gap-1 px-50 lg:gap-10">

                <div className="bg-gray-100 w-90 h-auto flex  justify-start items-center rounded-1xl p-8 mt-8 gap-4">
                
                    <img src="/list.svg" alt=""  className="size-8"/>
                    <p className="text-black text-xl font-bold">{ordensAbertas.length}</p>
                    <p className="text-black text-l">ordens abertas</p>

                </div>

                <div className="bg-gray-100 w-90 h-auto flex  justify-start items-center rounded-1xl p-8 mt-8 gap-4">
                
                    <img src="/clock.svg" alt=""  className="size-8"/>
                    <p className="text-black text-xl font-bold">{ordensVencidas.length}</p>
                    <p className="text-black text-l">vencidas</p>

                </div>

                    <div className="bg-gray-100 w-90 h-auto flex  justify-start items-center rounded-1xl p-8 mt-8 gap-4">
                    
                    <img src="/pausa.svg" alt=""  className="size-8"/>
                    <p className="text-black text-xl font-bold">{equipamentosParados.length}</p>
                    <p className="text-black text-l">equipamentos parados</p>

                </div>

          </div>
        
        </>
    )
}