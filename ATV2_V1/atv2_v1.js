//array dos alunos
var students = [];
//variável de controle
let clicks = 0;
let edit_student_index = 0;
//array dos cursos e cadeiras
var coursers = [];

//classe para criação do objeto
class student{
    student_name; //nome
    student_date //data de nascimento
    student_reg_date //data de matricula
    student_age; //idade
    student_course; //curso
    student_modality //modalidade (bolsista, proUni ou Fies)
    student_chairs //cadeiras do estudante
    student_reg //matricula

//método construtor da classe
    constructor(st_name, st_reg, st_date, st_reg_date, st_course, st_modality, st_chairs){
        this.student_name = st_name;
        this.student_course = st_course;
        this.student_age =  Math.floor(Math.ceil(Math.abs(new Date(st_date).getTime() - new Date().getTime()) / (1000 * 3600 * 24)) / 365.25);
        this.student_chairs = st_chairs; 
        this.student_modality = st_modality;
        this.student_date = st_date;
        this.student_reg = st_reg;
        this.student_reg_date = st_reg_date;
        
    }

}

class chairs{
    chair_0;
    chair_1;

    constructor(chair_0, chair_1){
        this.chair_0 = chair_0;
        this.chair_1 = chair_1;
    }

}

coursers[0] = new chairs("Lógica de Programação 1", "Técnicas de Programação");
coursers[1] = new chairs("Programação para Jogos", "Modelagem e animação");

function set_radio(reg1, reg2, reg3, reg4){
    if(reg1.checked) return "Bolsista";
    else if(reg2.checked) return "ProUni";
    else if(reg3.checked) return "FIES";
    else return "Particular";
}

function set_selected_chairs(){
    let chairs = [];
    let count_children = document.getElementById("checkboxes_chairs").childElementCount;
    /*let childrens = document.getElementById("checkboxes_chairs").children;
    let count_inputs = 0;

    for(let i = 0; i < count_children; i++){
        if(childrens[i].checked){
            chairs.push(coursers[selected_courser]['chair_' + count_inputs]);
            count_inputs ++;
        } 
    }*/
    count_children / 2;
    let selected_courser = document.getElementById("select_courses").value;
    for(let x = 0; x < count_children; x++){
        if(document.getElementById('chair_1').checked){
            chairs.push(coursers[selected_courser].chair_0);
        }
        if(document.getElementById('chair_2').checked){
            chairs.push(coursers[selected_courser].chair_1);
        }
    }

    return chairs;
}

function set_courser(){
    let var1; //acabou a criatividade para variáveis
    if(document.getElementById("select_courses").value == 0){
        return "Ciências da Computação";
    }
    else if(document.getElementById("select_courses").value == 1){
        return "Jogos Digitais";
    }
}
function set_color(value){
    if (value % 2 == 0) return "claro";
    else if (value % 2 == 1) return "escuro";
}
function set_default(){
    document.getElementById('reg_name').value = null;
    document.getElementById('reg_reg').value = null;
    document.getElementById('reg_date').value = null;
    document.getElementById("reg_reg_date").value = null;
    document.getElementById("reg_reg_date").value = null;
    document.getElementById('reg_modality1').checked = false;
    document.getElementById('reg_modality2').checked = false;
    document.getElementById('reg_modality3').checked = false;
    document.getElementById('reg_modality4').checked = false;
    document.getElementById('select_courses').value = null;

    let count_chairs = document.getElementById('checkboxes_chairs').childElementCount;
    let chairs_children = document.getElementById('checkboxes_chairs').children;
    for(let x = 0; x < count_chairs; x ++){
        if(chairs_children[x].type == "checkbox"){
            chairs_children[x].checked = false;
        }
    }

}

//Cadastro e alteração
function include_in_students(){
    let mod = document.getElementById('button_form1').getAttribute('mod');
    if(mod == 1){
        //cadastrar
        let reg_name = document.getElementById('reg_name').value;
        let reg_reg = document.getElementById('reg_reg').value;
        let reg_date = document.getElementById('reg_date').value;

        let reg_reg_date = document.getElementById("reg_reg_date").value;
        let reg_modality = set_radio(document.getElementById("reg_modality1"), document.getElementById("reg_modality2"), document.getElementById("reg_modality3"), document.getElementById("reg_modality4"));
        let reg_courser = set_courser();

        let reg_chair = set_selected_chairs();

        students.push( new student(reg_name, reg_reg, reg_date, reg_reg_date, reg_courser, reg_modality, reg_chair)); //inserindo o novo cadastro no final do array

        reg_chair = null;
        reg_courser = null;
        alert("Estudante cadastrado com sucesso!");
    }
    else if(mod == 2){
        students[edit_student_index].student_name = document.getElementById('reg_name').value;
        students[edit_student_index].student_reg = document.getElementById('reg_reg').value;
        students[edit_student_index].student_date = document.getElementById('reg_date').value;
        students[edit_student_index].student_reg_date = document.getElementById('reg_reg_date').value;

        students[edit_student_index].student_modality = set_radio(document.getElementById("reg_modality1"), document.getElementById("reg_modality2"), document.getElementById("reg_modality3"), document.getElementById("reg_modality4"));

        students[edit_student_index].student_course = set_courser();
        students[edit_student_index].student_chairs = set_selected_chairs();

        alert("Dados alterado com sucesso!");
    }

    set_default();
}
//leitura / exibição lista / edit aluno
function show_students_list(val1, val2, table_id){
    document.getElementById("search_reg").value = null;

    let show_students_body = document.getElementById(table_id);
    show_students_body.innerText = '';
    if(val1 == null && val2 == null){
        val1 = 0;
        val2 = students.length;
    }

    for(val1; val1 < val2; val1++){
        let x = val1;
        let tr = show_students_body.insertRow();
        tr.id = set_color(show_students_body.childElementCount);

        let td_name = tr.insertCell();
        let td_reg = tr.insertCell();
        let td_edit = tr.insertCell();
        let td_exc = tr.insertCell();

        td_name.width = 500;
        td_name.id = "left";

        td_name.innerText = students[val1].student_name;
        td_reg.innerText = students[val1].student_reg;

        let button1 = document.createElement('img'); //botão de editar
        //button1.setAttribute('type', 'button');
        button1.width = 25;
        button1.alt = "EDITAR";
        button1.src = 'img/edit.png';
        button1.onclick = function(){
            get_student(x);
        }

        let button2 = document.createElement('img'); //botão de excluir
        //button2.setAttribute('type', 'button');
        button2.width = 25;
        button2.alt = "EXCLUIR";
        button2.src = 'img/excluir.png';
        button2.onclick = function(){
            let confirm = window.confirm("Deseja excluir o aluno: " + students[x].student_name + "?");
            if(confirm){
                students.splice(x, 1);
                show_students_list(null,null,'show_students_body');
            }
        }
        
        td_edit.appendChild(button1);
        td_exc.appendChild(button2);
        
    }
}
//função que pega os dados no array e insere no form
function get_student(student_index){
    edit_student_index = student_index;
    on_cad_click('div_add');
    document.getElementById('reg_name').value = students[student_index].student_name;
    document.getElementById('reg_reg').value = students[student_index].student_reg;
    document.getElementById('reg_date').value = students[student_index].student_date;
    document.getElementById("reg_reg_date").value = students[student_index].student_reg_date;
    //

    let count_modality = document.getElementById('modality').childElementCount;
    count_modality = count_modality / 2 - 1;
    for(let x = 1; x < count_modality; x ++){
        let label_modality = document.getElementById('label_modality' + x).getAttribute('valor');
        if(students[student_index].student_modality == label_modality){
            document.getElementById('reg_modality' + x).checked = true;
        }
    }
    let courser_value;
    for(let x = 0; x < coursers.length; x++){
        for(let z = 0; z < students[student_index].student_chairs.length; z++){
            if(coursers[x].chair_0 == students[student_index].student_chairs[z]){
                document.getElementById('chair_1').checked = true;
                courser_value = x;
            }
            if(coursers[x].chair_1 == students[student_index].student_chairs[z]){
                document.getElementById('chair_2').checked = true;
                courser_value = x;
            }
        }
    }
    document.getElementById('select_courses').value = courser_value;

    document.getElementById('button_form1').setAttribute('mod', 2);
}


// função para pesquisar cadastro por matrícula
function find_reg(reg_value){
    let find_reg = document.getElementById(reg_value).value;
    let index;
    for(let i = 0; i < students.length; i++){
        if(students[i].student_reg == find_reg){
            index = i;
            show_students_list(index, index + 1 ,'show_students_body')
            //get_student(index)
            return;
        }
    }
    alert("Matrícula não cadastrada!");
}

function chairs_opt(){

    let selected_courser = document.getElementById("select_courses").value;

    label_chair1 = document.getElementById("chair_1l").innerHTML = coursers[selected_courser].chair_0;
    label_chair2 = document.getElementById("chair_2l").innerHTML = coursers[selected_courser].chair_1;

}
// as 2 funções a seguir esconde e exibi as 2 divs principais
function on_cad_click(el){
    document.getElementById('button_form1').setAttribute('mod', 1);
    var display = document.getElementById(el).style.display;
        if(display == "none"){
            document.getElementById(el).style.display = 'block';
            document.getElementById("div_list").style.display = 'none';
        }
        else if(display == "block"){
            document.getElementById(el).style.display = 'none';
        }
}
function on_list_click(el){
    show_students_list(null, null, 'show_students_body');
    var display = document.getElementById(el).style.display;
        if(display == "none"){
            document.getElementById(el).style.display = 'block';
            document.getElementById("div_add").style.display = 'none';
        }
        else if(display == "block"){
            document.getElementById(el).style.display = 'none';
        }
}

//hidden automático das 2 divs principais
function hidden(el){
    document.getElementById(el).style.display = "none";
}