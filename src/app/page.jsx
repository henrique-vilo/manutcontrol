"use client"

import Image from "next/image";
import dados from "@/manutcontrol_dados.json";
import Welcome from "@/components/Welcome";

export default function Home() {

  return (
    <>

      <div className="bg-gray-200">

        <Welcome/>

        {/* Tabela */}

        <div className="bg-gray-200 w-full min-h-[885px] flex flex-col">
          
          <div className="w-full min-h-100 flex flex-col lg:flex-row justify-center gap-3 px-50 mt-10">

            <div className="bg-gray-100 w-230 min-h-100 flex flex-col p-2">
            
              <div className="w-full h-1/8 flex flex-col lg:flex-row p-3">

                <p className="text-black font-bold">Ordens que Exigem Atenção</p>

              </div>
              <div className="w-full h-1/8 flex justify-center items-center">

                <div className="w-1/3 h-auto flex">
                  <form action="/pesquisa" method="get" className="flex">
                    <img src="/notificacao.svg" alt=""/>
                    <input type="search" name="pesquisa" className="focus:outline-none" placeholder="Buscar ordens, equipamentos, serviços..." />
                  </form>
                </div>
                <div className=""></div>
                <div className=""></div>

              </div>
              <div className=""></div>
              <div className=""></div>
          
            </div>

            <div className="w-150 h-full flex flex-col gap-3">

              <div className="bg-gray-100 w-full min-h-75 flex flex-col">a</div>
            
              <div className="bg-gray-100 w-full min-h-75 flex flex-col">a</div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}
