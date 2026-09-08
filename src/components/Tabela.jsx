"use client"

import dados from "@/manutcontrol_dados.json";
import { useEffect, useState } from "react";

export default function Tabela(){
    const ordens = dados.ordensServico;
    const equipamentos = dados.equipamentos;
    
    function EncontrarEquipamento(equipamentoCorrespondente){
        const nomeEquipamento = equipamentos.find(item => item.id === equipamentoCorrespondente);
        return nomeEquipamento.nome;
    }

    const [ordensFilter, setOrdensFilter] = useState(ordens);
    const [pesquisa, setPesquisa] = useState('')
    const [status, setStatus] = useState('');
    const [prioridade, setPrioridade] = useState('');

    useEffect(() => {
        let ordensFilter = ordens;
        const termo = pesquisa.toLowerCase().trim();

        if(pesquisa){
            ordensFilter = ordensFilter.filter(ordem => ordem.descricao.includes(termo) || EncontrarEquipamento(ordem.equipamentoId).includes(termo))
        }

        if(status){
            ordensFilter = ordensFilter.filter(ordem => ordem.status === status);
        } 

        if(prioridade){
            ordensFilter = ordensFilter.filter(ordem => ordem.prioridade === prioridade);
        } 

        setOrdensFilter(ordensFilter);
    }, [status, prioridade, pesquisa])

    const estado = ordensFilter.length > 0 ? <>

        <tbody className="text-center">
        {ordensFilter.map((ordem, idx) => {
            return(
            <tr key={idx} className="flex-col items-start text-start">
                <td >{ordem.codigo}</td>
                <td>{ordem.descricao}</td>
                <td>{EncontrarEquipamento(ordem.equipamentoId)}</td>
                <td>{ordem.prioridade}</td>
                <td>{ordem.tecnico}</td> 
                <td>{ordem.vencimento}</td>
                <td>{ordem.status}</td>
            </tr>
            )    
        })}
        </tbody>
        
    </> : <>
    
        <tr><td>Nenhum resultado encontrado</td></tr>

    </>
 
    return (
        <>

            <div className="w-full h-1/8 flex flex-col lg:flex-row p-3">

             <p className="text-black font-bold">Ordens que Exigem Atenção</p>

            </div>
            <div className="w-full h-1/30 flex justify-center items-center gap-3 mb-3">

            <div className="w-2/5 h-auto flex border border-gray-400">
                <form action="/pesquisa" method="get" className="w-full flex p-2">
                <img src="/lupa.svg" alt="" className="me-2"/>
                <input type="search" name="pesquisa" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)} className="w-full focus:outline-none text-gray-600" placeholder="Buscar..." />
                </form>
            </div>
            <div className="w-1/4 h-auto flex border border-gray-400">
                <form action="/pesquisa" method="get" className="w-full flex p-2.75">
                <select name="Status" id="status" className="text-black" onChange={(s) => setStatus(s.target.value)}>
                    <option value="">Todos os Status</option>
                    <option value="em andamento">Em Andamento</option>
                    <option value="aberta">Abertas</option>
                    <option value="vencida">Vencidas</option>
                </select>
                </form>
            </div>
            <div className="w-1/4 h-auto flex border border-gray-400">
                <form action="/pesquisa" method="get" className="w-full flex p-2.75">
                <select name="prioridades" id="prioridades" className="text-black" onChange={(p) => setPrioridade(p.target.value)}>
                    <option value="">Todas as Prioridades</option>
                    <option value="baixa">Prioridade Baixa</option>
                    <option value="media">Prioridade Média</option>
                    <option value="alta">Prioridade Alta</option>
                    <option value="urgente">Prioridade Urgente</option>
                </select>
                </form>
            </div>

            
            </div>

            <div className="w-full h-4/8 flex-col justify-center items-center mt-5 px-5">
                <table className="w-209 text-xs h-full text-black gap-5">
                    <thead>
                    <tr>
                        <th>OS</th>
                        <th>Descrição</th>
                        <th>Equipamentos</th>
                        <th>Prioridade</th>
                        <th>Técnico</th>
                        <th>Vencimento</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    {estado}
                </table>
            </div>
        
        </>
    )
}