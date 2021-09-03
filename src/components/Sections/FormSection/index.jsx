import React, { useState } from 'react'
import { Container, TitleMain } from './style'

const FormSection = () => {

    const [veiculo, setVeiculo] = useState('');
    const [fonte, setFonte] = useState('');

    return (
        <Container id='solicitar-cotacao'>

            <TitleMain>
                Solicitar Cotação
            </TitleMain>

            <form action="https://api.staticforms.xyz/submit" method="post">
                <input type="hidden" name="accessKey" value="222458de-2dac-4103-9808-a92ed7a4c3b9" />
                <div>
                    <label htmlFor="$Nome">Nome</label>
                    <input type="text" name="$Nome" />

                    <label htmlFor="$Telefone">Telefone</label>
                    <input type="text" name="$Telefone" />

                    <label htmlFor="$Email">E-mail</label>
                    <input type="text" name="$Email" />

                    <label htmlFor="$Seleção Carro Ou Moto">Tipo Do Veículo</label>
                    <select name="$Seleção Carro Ou Moto" value={veiculo} onChange={texto => setVeiculo(texto.target.value)}>
                        <option value="">Selecione</option>
                        <option value="Carro">Carro</option>
                        <option value="Moto">Moto</option>
                    </select>

                    <label htmlFor="$Modelo">Modelo</label>
                    <input type="text" name="$Modelo" />

                    <label htmlFor="$Placa">Placa</label>
                    <input type="text" name="$Placa" />

                    <label htmlFor="$Onde Nos Achou?">Onde Nos Achou?</label>
                    <select name="$Onde Nos Achou?" value={fonte} onChange={texto => setFonte(texto.target.value)}>
                        <option value="">Selecione</option>
                        <option value="Google">Google</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Instagram">Instagram</option>
                        <option value="Flyer">Flyer</option>
                    </select>

                </div>
                <input type="hidden" name="redirectTo" value="http://localhost:3000/" />
                <input type="submit" value="Enviar" className='button'/>
            </form>

        </Container>
    )
}

export default FormSection
