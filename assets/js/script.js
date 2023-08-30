window.onload = function() {
    document.getElementById('nenhum').checked = true
    title.innerText = "ATENÇÃO"
    title.classList.add('text-danger')
    legis.innerText = "Aviso Importante"
    legis.classList.add('text-danger')
    contentm.innerHTML = "<p>Esta calculadora não abrange todos os casos de aferição de AADP e ADI, não substituindo a consulta às legislações específicas, Resolução nº 807/2018 e Resolução nº 808/2018, especialmente no que tange aos casos especiais e específicos.</p><br>"
    contentm.innerHTML += '<h4 class="main-h4">OBSERVAÇÃO</h4>'
    contentm.innerHTML += "<p>Esta calculadora não se aplica às AADP's e ADI's de anos/períodos anteriores a 2019, devendo-se consultar as legislações vigentes à época (Resolução nº 85/2002, Resolução nº 133/2004, Resolução nº 343/2009 e Resolução nº 436/2011)</p>"
    toggleModal()
}

function mostraHiddenContent(){
    let elem = document.querySelector('#calContent')
    elem.classList.remove('hidden-content')
}

function myFunction(argument1, argument2){

    
    let elem1 = document.getElementById(argument1)
    let ser = elem1.value
    let elem2 = document.getElementById(argument2)
    elem2.innerText = ser
    let notaAdp = document.getElementById('nota-adp')
    let finalAdi = document.getElementById('final-adi')
    let pontAadp = document.getElementById('pontuacao-aadp')
    let nivelAadp = document.getElementById('nivel-aadp')

    let nota1 = document.getElementById('disc-nota').innerText != '---' ? parseFloat(document.getElementById('disc-nota').innerText) : '---'
    let nota2 = document.getElementById('hab-nota').innerText != '---' ? parseFloat(document.getElementById('hab-nota').innerText) : '---'
    let nota3 = document.getElementById('aptidao-nota').innerText != '---' ? parseFloat(document.getElementById('aptidao-nota').innerText) : '---'
    let nota4 = document.getElementById('disponibilidade-nota').innerText != '---' ? parseFloat(document.getElementById('disponibilidade-nota').innerText) : '---'



    let arri = new Array(nota1, nota2, nota3, nota4)
    if(!arri.includes('---')){
        let aadp1 = (arri[0] + arri[1] + arri[2] + arri[3])*0.2
        pontAadp.innerText =  aadp1.toFixed(2)
        if(aadp1 >= 9){
            notaAdp.innerText = "50"

            nivelAadp.innerText = "Nível superior de desempenho"
        }else if(aadp1 >= 7 && aadp1 < 9){
            notaAdp.innerText = "40"

            nivelAadp.innerText = "Nível alto de desempenho"
        }else if(aadp1 >= 6 && aadp1 < 7){
            notaAdp.innerText = "30"

            nivelAadp.innerText = "Nível intermediário de desempenho"
        }else if(aadp1 >= 4 && aadp1 < 6){
            notaAdp.innerText = "20"

            nivelAadp.innerText = "Nível baixo de desempenho"
        }else if(aadp1 >= 1 && aadp1 < 4){
            notaAdp.innerText = "10"

            nivelAadp.innerText = "Nível inferior de desempenho"
        }else{
            notaAdp.innerText = "---"

            nivelAadp.innerText = "---"
        }
        
    }else{
        notaAdp.innerText = '---'

        pontAadp.innerText = '---'
        nivelAadp.innerText = '---'
    }

    let nota5 = document.getElementById('nota-adp').innerText != '---' ? parseFloat(document.getElementById('nota-adp').innerText) : '---'
    let nota6 = document.getElementById('conceito-nota').innerText != '---' ? parseFloat(document.getElementById('conceito-nota').innerText) : '---'
    let nota7 = document.getElementById('tpb-nota').innerText != '---' ? parseFloat(document.getElementById('tpb-nota').innerText) : '---'
    let item7 = document.getElementById('tpb').selectedIndex
    let item8 = document.getElementById('conceito').selectedIndex

    if(item7 == 0){
        document.getElementById('tpb-nota').innerText = '---'
        document.getElementById('final-adi').innerText = '---'
        return
    }else if(item8 == 0){
        document.getElementById('conceito-nota').innerText = '---'
        document.getElementById('final-adi').innerText = '---'
        return
    }
    if(nota5 == '---'){
        document.getElementById('final-adi').innerText = '---'
        return
    }else{
        console.log(nota5)
        finalAdi.innerText = nota5 != '---' ? nota5 + nota6 + nota7 : '---'
    } 

}

const adiDate = document.querySelector("#modal > div.modal-body > div.calc-content.hidden-content > div > div.saida > label")
const date = new Date();
const currentYear = date.getFullYear();


function labelAdiDate(){
    // Vefifica qual é o valor da data de inclusão
    let data = document.getElementById('1data').checked
    let data1 = document.getElementById('2data').checked
    let data2 = document.getElementById('nenhum').checked

    // Verifica qual é o valor do campo Ano da ADI
    let sano = document.getElementById('ano-adi').value

    if(data){
        msg = `Para calculo considere a AADP do ano de <span class="destac-span">${sano - 1}</span>`
    }else if(data1){
        msg = `Para calculo considere a AADP do ano de <span class="destac-span">${sano}</span>`
    }else{
        msg = "---"
    }

    adiDate.innerHTML = msg
    
}


function limparAadp(){
    document.getElementById('disciplina').value = '---'
    document.getElementById('habilidades').value = '---'
    document.getElementById('aptidao').value = '---'
    document.getElementById('disponibilidade').value = '---'
    document.getElementById('disc-nota').innerText = '---'
    document.getElementById('hab-nota').innerText = '---'
    document.getElementById('aptidao-nota').innerText = '---'
    document.getElementById('disponibilidade-nota').innerText = '---'
    document.getElementById('nota-adp').innerText = '---'

    document.getElementById('final-adi').innerText = '---'
    document.getElementById('pontuacao-aadp').innerText = '---'
    document.getElementById('nivel-aadp').innerText = '---'

}

function limparAdi(){
    document.getElementById('tpb').value = '---'
    document.getElementById('conceito').value = '---'
    document.getElementById('final-adi').innerText = '---'
    document.getElementById('conceito-nota').innerText = '---'
    document.getElementById('tpb-nota').innerText = '---'
    document.getElementById('nenhum').checked = true
    adiDate.innerText =  '---'
    console.log(currentYear); //2022
    document.getElementById('ano-adi').value = currentYear

    // document.getElementById('ano-adi').value = currentYear

}

// FUNÇAO DAS MODAIS

const openModalButton = document.querySelectorAll(".button-saiba");
const closeModalButton = document.querySelector("#close-modal");
const modaly = document.querySelector("#modal");
const hiddido = document.querySelector("#fade");

const title = document.querySelector("#modal-title");
const legis = document.querySelector("#modal-legis");
const contentm = document.querySelector(".modal-content");
const elemHidden = document.querySelector('#calContent')




const modalTitulo = new Array("DISCIPLINA", "HABILIDADES PROFISSIONAIS", "APTIDAO FÍSICA", "DISPONIBILIDADE PARA O TRABALHO", "AADP", "CONCEITO", "TPB", "PERÍODO DE AVALIAÇÃO", "DATA DE INCLUSÃO PARA APURAÇÃO DA ADI","REGRAS PARA 1ª AADP E ADI DOS MILITARES DESIGNADOS PARA O SERVIÇO ATIVO", "VIDEO TUTORIAL")
const modalLegis = new Array("Resolução 808/2018", "Resolução 808/2018", "Resolução 808/2018", "Resolução 808/2018", "Resolução 807/2018", "Resolução 807/2018", "Resolução 807/2018", "Resolução 808/2018", "Resolução 807/2018", "Resolução 808/2018","Como utilizar a calculadora")

    contentm.innerHTML += '<h4 class="main-h4">OBSERVAÇÃO</h4>'
const modalConteudo0 = "<p>Art. 9º - Para a avaliação da disciplina será utilizado o conceito disciplinar do militar, conforme CEDM.</p>Art. 10 - O conceito disciplinar será aferido em:<br>I - 10 pontos para o conceito 'A'<br>II - 9 pontos para o conceito 'B' com pontuação superior a 35 pontos positivos;<br>III - 8 pontos para o conceito 'B' com pontuação de 25 pontos positivos até 35 pontos positivos;<br>IV - 7 pontos para o conceito 'B' com pontuação positiva até 24 pontos;<br>V - 6 pontos para o conceito 'B' com pontuação de zero ponto;<br>V - 5 pontos para o conceito 'B' com pontuação negativa superior a 25 pontos;<br>VI - 4 pontos para o conceito 'B' com pontuação negativa de 25 pontos, ou menor;<br>VII - 1 ponto para o conceito 'C';</p><p>§ 1º - Para o militar recém incluído no CBMMG, será utilizada a pontuação máxima até que este alcance o conceito 'A”, salvo se for punido disciplinarmente, situação em que se observará a regra estabelecida no caput.</p><p>§ 2º - Para a realização da AADP, o conceito disciplinar será considerado na data prevista no Art. 5º.</p><hr><h4 style='text-align:center;margin-bottom:5px;background:rgba(0,0,0,.3);padding:5px;'>Exemplos </h4><p><b>Exemplo 1:</b> Para AADP 2023 - Preencha com o conceito que o militar possuía em 30 de junho de 2023.</p><p><b>Exemplo 2:</b> Para AADP 2022 - Preencha com o conceito que o militar possuía em 30 de junho de 2022.</p>"

const modalConteudo1 = "<p>Art. 11 - A aferição das habilidades profissionais terá como referência a ATP, que tem execução disciplinada em resolução específica.</p><p>Parágrafo único - O resultado da ATP será utilizado na AADP da seguinte forma:<br>I - 15 pontos para o militar apto;<br>II - 3 pontos para o militar inapto.</p><p>Art. 12 - Para a realização da AADP, será utilizada a ATP feita no ano anterior.</p><hr><h4 style='text-align:center;margin-bottom:5px;background:rgba(0,0,0,.3);padding:5px;'>Exemplos </h4><p><b>Exemplo 1:</b> Para AADP 2023 - Preencha com a ATP feita em 2022.</p><p><b>Exemplo 2:</b> Para AADP 2022 - Preencha com a ATP feita em 2021.</p>"

const modalConteudo2 = "<p>Art. 16 - A aferição da aptidão física terá como referência o TAF, que tem execução disciplinada em resolução específica.</p><p>Parágrafo único - O resultado do TAF será utilizado na AADP da seguinte forma:<br>I - 15 pontos para média final de 9 a 10 pontos;<br>II - 14 pontos para média final de 8 a 8,99 pontos;<br>III - 13 pontos para média final de 7 a 7,99 pontos;<br>IV - 12 pontos para média final de 6 a 6,99 pontos;<br>V - 3 pontos para média final inferior a 6 pontos.</p><p>Art. 17 - Para a realização da AADP, será utilizado o TAF feito no ano anterior.</p><hr><h4 style='text-align:center;margin-bottom:5px;background:rgba(0,0,0,.3);padding:5px;'>Exemplos </h4><p><b>Exemplo 1:</b> Para AADP 2023 - Preencha com o TAF feito em 2022.</p><p><b>Exemplo 2:</b> Para AADP 2022 - Preencha com o TAF feito em 2021.</p>"

const modalConteudo3 = "<p>Art. 19 - A disponibilidade para o trabalho será apurada no período de 12 meses anteriores ao dia 1º de julho de cada ano.</p><p>Parágrafo único - A disponibilidade para o serviço será pontuada da seguinte forma:<br>I - 10 pontos para afastamento inexistente;<br>II - 9 pontos para afastamento de 1 até 30 dias;<br>III - 8 pontos para afastamento de 31 até 45 dias;<br>IV - 7 pontos para afastamento de 46 até 60 dias;<br>V - 5 pontos para afastamento de 61 até 90 dias;<br>VI - 3 pontos para afastamento acima de 90 dias.<p>Art. 20 - Os seguintes dias de afastamento serão considerados como efetivamente trabalhados na contagem de disponibilidade para o serviço:<br>I - férias anuais;<br>II - férias prêmio;<br>III - licença maternidade ou paternidade;<br>IV - licença saúde até 30 dias;<br>V - dispensa de serviço: núpcias, luto, Programa de Preparação para a Reserva,doação de sangue, trânsito e instalação e aquelas decorrentes da Lei nº 14.310/2002;VI - licença por motivo de doença em pessoa da família até 30 dias.</p><p>Parágrafo único - Ao militar com licença saúde que estiver amparado em Atestado de Origem (AO) não se aplica o limite de tempo previsto no inciso IV.</p><hr><h4 style='text-align:center;margin-bottom:5px;background:rgba(0,0,0,.3);padding:5px;'>Exemplos </h4><p><b>Exemplo 1:</b> Para AADP 2023 - Preencha com os afastamentos ocorridos de 01 de julho de 2022 a 30 de junho de 2023.</p><p><b>Exemplo 2:</b> Para AADP 2022 - Preencha com os afastamentos ocorridos de 01 de julho de 2021 a 30 de junho de 2022.</p>"


const modalConteudo4 = "<p>Art. 6º - A AADP será regulada em resolução específica e a pontuação nela obtida corresponderá aos seguintes níveis de desempenho:<br>I - pontuação de 9 até 10 pontos, inclusive: nível superior de desempenho;<br>II - pontuação de 7 até 8,99 pontos, inclusive: nível alto de desempenho;<br>III - pontuação de 6,00 até 6,99 pontos, inclusive: nível intermediário de desempenho;<br>IV - pontuação de 4,00 até 5,99 pontos, inclusive: nível baixo de desempenho;<br>V - pontuação de 1,0 até 3,99 pontos, inclusive: nível inferior de desempenho.</p><p>Art. 7º - Os níveis de desempenho, obtidos nos termos do artigo anterior, corresponderão à pontuação a seguir estabelecida, a qual será somada aos demais fatores da ADI, nos termos do Art. 4º:<br>I - 50 pontos para o nível superior de desempenho;<br>II - 40 pontos para o nível alto de desempenho;<br>III - 30 pontos para o nível intermediário de desempenho;<br>IV - 20 pontos para o nível baixo de desempenho;<br>V - 10 pontos para o nível inferior de desempenho.</p><br><h3 style='text-align:left;'>Resolução 807/2018</h3><p>Art. 36:</p><p>[...]</p><p>§ 2º - Para os militares designados para o serviço ativo será observado para a primeira ADI a ser realizada:</p><p>I - se a designação ocorrer até 30 de junho do ano em curso, será utilizada a AADP confeccionada, considerando o mesmo período de confecção da ADI.</p><p>II - se a designação ocorrer após 30 de junho do ano em curso, será utilizada a AADP feita considerando o período da data da designação até a data de 30 de junho.</p><p>[...]</p>"

const modalConteudo5 = "<p>Art. 9º - O conceito individual previsto no CEDM será aferido em:<br>I - 30 pontos para os conceitos 'A' ou 'B' com pontuação igual ou superior a 25;<br>II - 25 pontos para o conceito 'B' com pontuação de zero até 24;<br>III - 20 pontos para o conceito 'B' com pontuação de -24 até -1;<br>IV - 15 pontos para o conceito 'B' com pontuação de -50 até -25;<br>V - zero ponto para o conceito 'C'.</p><p>Parágrafo único - O militar que ingressar no CBMMG e atender as condições para a obtenção do ADE terá seu conceito disciplinar considerado em grau máximo nos três primeiros anos, salvo se for punido disciplinarmente, situação em que adotar-se-á a regra definida no caput.</p><hr><br><h3 style='text-align:left;'>Resolução 807/2018</h3><p>Art. 36 - Para apuração da ADI, os fatores de avaliação serão utilizados da seguinte forma:</p><p>[...]</p><p>II - o conceito disciplinar será considerado aquele existente no último dia do período avaliatório;</p><p>[...]</p><hr><h4 style='text-align:center;margin-bottom:5px;background:rgba(0,0,0,.3);padding:5px;'>Exemplos </h4><p><b>Exemplo 1:</b> Para ADI 2023, militar que tenha período avaliatório de 18/01/2022 a 17/01/2023, deverá usar o conceito que possuía em 17/01/2023, ou seja, no último dia do seu período avaliatório.</p><p><b>Exemplo 2:</b> Para ADI 2023, militar que tenha período avaliatório de 30/04/2022 a 29/04/2023, deverá utilizar o conceito que possuía em 29/04/2023, último dia do período avaliatório.</p>"

const modalConteudo6 = "<p>Art. 10 - O TPB é a atividade que visa à atualização e o aperfeiçoamento do bombeiro militar, com vistas ao cumprimento de suas missões constitucionais.</p><p>Art. 11 - O TPB compreende o TAF, a ATP e o Tiro Prático, todos executados conforme normas em vigor na Corporação.</p><p>Art. 12 - O TPB, para fins de composição da ADI, será aferido em:I - 20 pontos para aptidão nas três provas;<br>II - 15 pontos para aptidão em duas das três provas;<br>III - 10 pontos para aptidão em uma das três provas;<br>IV - zero ponto para inaptidão em todas as provas.</p><hr><br><h3 style='text-align:left;'>Resolução 807/2018</h3><p>Art. 36 - Para apuração da ADI, os fatores de avaliação serão utilizados da seguinte forma:</p><p>[...]</p><p> III - para as provas do TPB, na apuração da pontuação prevista no art. 12, será observada a aptidão em cada uma das provas previstas no art. 11, da seguinte forma: </p><p>a) TAF e ATP realizados no ano de início do período avaliatório para a execução da ADI ou, na sua falta, no ano anterior; </p><p>b) Tiro prático válido no ano de execução da ADI.</p><p>[...]</p><hr><h4 style='text-align:center;margin-bottom:5px;background:rgba(0,0,0,.3);padding:5px;'>Exemplos </h4><p><b>Exemplo 1:</b> ADI 2023, para militar com período avaliatório de 18/01/2022 a 17/01/2023, deverá ser usado ATP e TAF realizados no ano de 2022 ou na sua falta no ano de 2021, ou seja, no ano em que se inicia seu período avaliatório, e na sua falta no ano anterior. Deverá também ser utilizado Tiro prático realizado nos anos de 2021, 2022 ou até 17/01/2023.</p><p><b>Exemplo 2:</b> ADI 2022, para militar que tenha período avaliatório de 30/04/2021 a 29/04/2022, deverá ser usado ATP e TAF realizados no ano de 2021 ou na sua falta no ano de 2020, ou seja, no ano em que se inicia seu período avaliatório, e na sua falta no ano anterior. Deverá também ser utilizado Tiro prático realizado nos anos de 2020, 2021 ou até 29/04/2022.</p>"

const modalConteudo7 = "<p>Art. 5º - A AADP será realizada, anualmente, a partir do mês de julho, sendo que os seus critérios de aferição serão considerados na data de 30 de junho e conforme disposto nesta resolução.</p><p>Parágrafo único - A Unidade/Unidade apoiadora realizará a AADP conforme o seguinte cronograma:<br>I - no mês de julho, para todos os militares cogitados à promoção no ano;<br>II - no mês de julho, para todos os militares com aniversário de inclusão em julho e agosto;<br>III - até o mês de agosto, para todos os militares com aniversário de inclusão em setembro e outubro;<br>IV - até o mês de setembro, para todos os militares com aniversário de inclusão em novembro e dezembro;<br>V - até o mês de outubro, para todos os militares com aniversário de inclusão em janeiro e fevereiro;<br>VI - até o mês de novembro, para todos os militares com aniversário de inclusão em março e abril;<br>VII - até o mês de dezembro, para todos os militares com aniversário de inclusão em maio e junho.</p><hr><h4 style='text-align:center;margin-bottom:5px;background:rgba(0,0,0,.3);padding:5px;'>Exemplos </h4><p><b>Exemplo 1:</b> Para AADP 2023 - Preencha com a ATP feita em 2022.</p><p><b>Exemplo 2:</b> Para AADP 2022 - Preencha com a ATP feita em 2021.</p>"

const modalConteudo8 = "<p>Art. 36 - Para apuração da ADI, os fatores de avaliação serão utilizados da seguinte forma: </p><p>I - a AADP será aquela realizada no ano de confecção da ADI, para militares incluídos a partir de 1º de julho ou aquela realizada no ano anterior, para militares incluídos até 30 de junho</p><p>[...]</p><hr><h4 style='text-align:center;margin-bottom:5px;background:rgba(0,0,0,.3);padding:5px;'>Exemplos </h4><p><b>Exemplo 1:</b> Para AADP 2023 - Preencha com a ATP feita em 2022.</p><p><b>Exemplo 2:</b> Para AADP 2022 - Preencha com a ATP feita em 2021.</p>"

const modalConteudo9 = "<p>Art. 29-A - A primeira AADP para os militares designados para o serviço ativo, oriundos de todos os quadros, será referenciada como AADP do ano da designação e será observado:</p><p>I - se a designação ocorrer até 30 de junho, a AADP será confeccionada observando o mesmo período de confecção da ADI;</p><p>II - se a designação ocorrer, após 30 de junho, a AADP será confeccionada observando o período da data da designação até a data de 30 de junho;</p><p>III - para o TAF e a ATP, será observada a prova executada dentro dos períodos listados nos incisos anteriores.</p><p>Parágrafo único. As demais AADP serão feitas conforme prazos e critérios previstos nesta resolução, utilizando os resultados do TAF e da ATP do ano anterior,independente se já foram utilizados na AADP do ano da designação.</p><hr><br><h3 style='text-align:left;'>Resolução 807/2018</h3><p>Art. 36 - Para apuração da ADI, os fatores de avaliação serão utilizados da seguinte forma:</p><p>[...]</p><p>§ 2º - Para os militares designados para o serviço ativo será observado para a primeira ADI a ser realizada:</p><p>I - se a designação ocorrer até 30 de junho do ano em curso, será utilizada a AADP confeccionada, considerando o mesmo período de confecção da ADI.</p><p>II - se a designação ocorrer após 30 de junho do ano em curso, será utilizada a AADP feita considerando o período da data da designação até a data de 30 de junho.</p><p>III - na falta de alguma das provas do TPB, poderá ser utilizada a prova executada no ano anterior ao último ano de efetivo serviço do militar quando na ativa ou quando de sua última designação.</p><hr><h4 style='text-align:center;margin-bottom:5px;background:rgba(0,0,0,.3);padding:5px;'>Exemplos </h4><p><b>Exemplo 1:</b> Para AADP 2023 - Preencha com a ATP feita em 2022.</p><p><b>Exemplo 2:</b> Para AADP 2022 - Preencha com a ATP feita em 2021.</p>"

const modalConteudo10 = '<div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/nzmkk6CgF5o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>';

const calcInclusao = ''

const toggleModal = () => {
    [modaly, hiddido].forEach((el)=>el.classList.toggle("hide"));
}


[closeModalButton, hiddido].forEach((el) => {
    el.addEventListener("click", ()=>{
        legis.classList.remove('text-danger')
        title.classList.remove('text-danger')
        elemHidden.classList.add('hidden-content')
        //Primeiro botao saiba mais
        if(el.id == 'modal-disc'){
            title.innerText = modalTitulo[0]
            legis.innerText = modalLegis[0]
            contentm.innerHTML = modalConteudo0
        } else if(el.id == 'modal-hab'){
            title.innerText = modalTitulo[1]
            legis.innerText = modalLegis[1]
            contentm.innerHTML = modalConteudo1
        } else if(el.id == 'modal-apt'){
            title.innerText = modalTitulo[2]
            legis.innerText = modalLegis[2]
            contentm.innerHTML = modalConteudo2
        } else if(el.id == 'modal-disp'){
            title.innerText = modalTitulo[3]
            legis.innerText = modalLegis[3]
            contentm.innerHTML = modalConteudo3
        } else if(el.id == 'modal-aadp'){
            title.innerText = modalTitulo[4]
            legis.innerText = modalLegis[4]
            contentm.innerHTML = modalConteudo4
        } else if(el.id == 'modal-conc'){
            title.innerText = modalTitulo[5]
            legis.innerText = modalLegis[5]
            contentm.innerHTML = modalConteudo5
        } else if(el.id == 'modal-tpb'){
            title.innerText = modalTitulo[6]
            legis.innerText = modalLegis[6]
            contentm.innerHTML = modalConteudo6
        } else if(el.id == 'importante'){
            console.log("Clicou importante")
            title.innerText = modalTitulo[7]
            legis.innerText = modalLegis[7]
            contentm.innerHTML = modalConteudo7
        } else if(el.id == 'infocomp'){
            title.innerText = modalTitulo[8]
            legis.innerText = modalLegis[8]
            contentm.innerHTML = modalConteudo8
        } else if(el.id == 'prim-adi'){
            title.innerText = modalTitulo[9]
            legis.innerText = modalLegis[9]
            contentm.innerHTML = modalConteudo9
        }
        toggleModal()
        const iframe = document.querySelector('.embed-responsive-item');
        const videoSrc = iframe.src;
        iframe.src = '';
        iframe.src = videoSrc;

    });
});

openModalButton.forEach((el) => {
    el.addEventListener("click", ()=>{
        if(el.id == 'modal-disc'){
            title.innerText = modalTitulo[0]
            legis.innerText = modalLegis[0]
            contentm.innerHTML = modalConteudo0
        } else if(el.id == 'modal-hab'){
            title.innerText = modalTitulo[1]
            legis.innerText = modalLegis[1]
            contentm.innerHTML = modalConteudo1
        } else if(el.id == 'modal-apt'){
            title.innerText = modalTitulo[2]
            legis.innerText = modalLegis[2]
            contentm.innerHTML = modalConteudo2
        } else if(el.id == 'modal-disp'){
            title.innerText = modalTitulo[3]
            legis.innerText = modalLegis[3]
            contentm.innerHTML = modalConteudo3
        } else if(el.id == 'modal-aadp'){
            title.innerText = modalTitulo[4]
            legis.innerText = modalLegis[4]
            contentm.innerHTML = modalConteudo4
        } else if(el.id == 'modal-conc'){
            title.innerText = modalTitulo[5]
            legis.innerText = modalLegis[5]
            contentm.innerHTML = modalConteudo5
        } else if(el.id == 'modal-tpb'){
            title.innerText = modalTitulo[6]
            legis.innerText = modalLegis[6]
            contentm.innerHTML = modalConteudo6
        } else if(el.id == 'importante'){
            console.log("Clicou importante")
            title.innerText = modalTitulo[7]
            legis.innerText = modalLegis[7]
            contentm.innerHTML = modalConteudo7
        } else if(el.id == 'infocomp'){
            title.innerText = modalTitulo[8]
            legis.innerText = modalLegis[8]
            contentm.innerHTML = modalConteudo8
        } else if(el.id == 'prim-adi'){
            title.innerText = modalTitulo[9]
            legis.innerText = modalLegis[9]
            contentm.innerHTML = modalConteudo9
        }else if(el.id == 'modal-tutorial'){
            title.innerText = modalTitulo[10]
            legis.innerText = modalLegis[10]
            contentm.innerHTML = modalConteudo10
        }
        toggleModal()
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.getElementById('tooltip');
    const tooltipTitle = document.getElementById('tooltip-title');
    const tooltipContent = document.getElementById('tooltip-content');
    const tooltipTargets = document.querySelectorAll('.tooltip-target');

    function showTooltip(e) {
        const tooltipTextTitle = e.target.getAttribute('data-tooltip-title');
        const tooltipTextContent = e.target.getAttribute('data-tooltip');

        tooltipTitle.innerHTML = tooltipTextTitle;
        tooltipContent.innerHTML = tooltipTextContent;

        let x = e.pageX || (e.touches ? e.touches[0].pageX : 0);
        let y = e.pageY || (e.touches ? e.touches[0].pageY : 0);

        let tooltipWidth = tooltip.offsetWidth;
        let tooltipHeight = tooltip.offsetHeight;

        tooltip.style.left = (x - tooltipWidth / 2) + 'px';
        tooltip.style.top = (y + 15) + 'px';

        tooltip.style.display = 'block';
    }

    function hideTooltip() {
        tooltipTitle.textContent = '';
        tooltipContent.textContent = '';
        tooltip.style.display = 'none';
    }

    tooltipTargets.forEach(target => {
        target.addEventListener('mousemove', showTooltip);
        target.addEventListener('mouseout', hideTooltip);

        // Suporte para dispositivos móveis
        target.addEventListener('touchstart', showTooltip);
        target.addEventListener('touchend', hideTooltip);
    });
});




