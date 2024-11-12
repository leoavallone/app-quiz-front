import React, { useEffect, useState } from "react";

interface FirstComponentProps {
    nomes?: string[];
}

interface Perguntas {
    id: number
    titulo: string;
    respostas: Respostas[];
}

interface Respostas {
    id: number
    titulo: string;
    correta: Boolean;
}

const FirstComponent: React.FC<FirstComponentProps> = ({ nomes }) => {
    const questions: Perguntas[] = [
        {
            id: 1,
            titulo: "Qual a capital do Brasil?",
            respostas: [
                {
                    id: 1,
                    titulo: "Rio de Janeiro",
                    correta: false
                },
                {
                    id: 2,
                    titulo: "São Paulo",
                    correta: false
                },
                {
                    id: 3,
                    titulo: "Brasília",
                    correta: true
                },
                {
                    id: 4,
                    titulo: "Bahia",
                    correta: false
                }
            ]
        },
        {
            id: 2,
            titulo: "Qual a data do descobrimento do Brasil?",
            respostas: [
                {
                    id: 5,
                    titulo: "1500",
                    correta: true
                },
                {
                    id: 6,
                    titulo: "1350",
                    correta: false
                },
                {
                    id: 7,
                    titulo: "1945",
                    correta: false
                },
                {
                    id: 8,
                    titulo: "1000",
                    correta: false
                }
            ]
        }
    ]

    const checkResposta = (awnser: any) => {
        if(awnser.correta){
            alert('Resposta certa!');
        }else{
            alert('Resposta errada!');
        }
    }

    return(
        <div>
            {questions && questions?.length > 0 ? (
                questions.map((question: Perguntas) => (
                    <div key={question.id}>
                        <h3>{question.titulo}</h3>
                        {question.respostas.map((resposta: any) => (
                            <div key={resposta.id}>
                            <input type="radio" id="html" name={`question-${question.id}`} value="HTML" onChange={()=>checkResposta(resposta)}/>
                            <label>{resposta.titulo}</label><br></br>
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <h3>Não existem perguntas no momento!</h3>
            )}

            
        </div>
    )
}

export default FirstComponent;