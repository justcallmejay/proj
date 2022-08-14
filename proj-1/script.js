let body = document.querySelector('body')

let form = document.querySelector('#form')
let goal = document.getElementById('goal')
let time = document.querySelector('#time')
let text = document.getElementById('text')
let next = document.querySelector('#next')


let form2 = document.querySelector('#form2')
let addPlaceHolder = document.querySelector('#monthly')
let addPlaceHolder2 = document.querySelector('#monthly2')
let addPlaceHolder3 = document.querySelector('#monthly3')
let submitMon = document.querySelector('#submitMonths')

let form3 = document.querySelector('#form3')

let x = document.querySelector('#monthly')
let y = document.querySelector('#monthly2')
let z = document.querySelector('#monthly3')
let m = document.querySelector('#month1')
let n = document.querySelector('#month2')
let o = document.querySelector('#month3')

let submitWk = document.querySelector('#submitWeeks')

let m1k1 = document.querySelector('#mon1wk1')
let m1k2 = document.querySelector('#mon1wk2')
let m1k3 = document.getElementById('mon1wk3')
let m1k4 = document.getElementById('mon1wk4')

let m2k1 = document.getElementById('mon2wk1')
let m2k2 = document.getElementById('mon2wk2')
let m2k3 = document.getElementById('mon2wk3')
let m2k4 = document.getElementById('mon2wk4')

let m3k1 = document.getElementById('mon3wk1')
let m3k2 = document.getElementById('mon3wk2')
let m3k3 = document.getElementById('mon3wk3')
let m3k4 = document.getElementById('mon3wk4')

let firMon = document.getElementById('firMon')
let secMon = document.getElementById('secMon')
let thiMon = document.getElementById('thiMon')

let form4 = document.querySelector('#form4')
let form5 = document.querySelector('#form5')
let container = document.querySelector('.container')





const column1 = document.querySelector('#column1')
const column2 = document.querySelector('#column2')
const column3 = document.querySelector('#column3')

const goalResult = document.querySelector('#goalResult')
const textResult = document.querySelector('#textResult')
const timeResult = document.querySelector('#timeResult')

let month1Result = document.querySelector('#month1Result')
let month2Result = document.querySelector('#month2Result')
let month3Result = document.querySelector('#month3Result')

let mon1 = document.querySelector('#mon1')
let mon2 = document.querySelector('#mon2')
let mon3 = document.querySelector('#mon3')

let mon1wk = document.querySelectorAll('.mon1wk')

let xy = document.createElement("INPUT")

let m1box1 = document.getElementById('m1box1')    
let m1box2 = document.getElementById('m1box2')
let m1box3 = document.getElementById('m1box3')
let m1box4 = document.getElementById('m1box4')

let m2box1 = document.getElementById('m2box1')
let m2box2 = document.getElementById('m2box2')
let m2box3 = document.getElementById('m2box3')
let m2box4 = document.getElementById('m2box4')

let m3box1 = document.getElementById('m3box1')
let m3box2 = document.getElementById('m3box2')
let m3box3 = document.getElementById('m3box3')
let m3box4 = document.getElementById('m3box4')

let addPh = [addPlaceHolder, addPlaceHolder2, addPlaceHolder3]
let monText = [firMon, secMon, thiMon]
let wkText = [m1k1, m2k1, m3k1]

next.disabled = true;

form.addEventListener('change', ()=> {
if (time.value !== "" && goal.value !== "") {
    next.disabled = false;
} else {
    next.disabled = true;
}
})

function chooseMons() {

    addPh.forEach(ph => {
        if (time.value === '3 Months') {
            ph.style.visibility = 'visible'
        } else if (time.value === '2 Months') {
            ph.style.visibility = 'visible'
            addPlaceHolder3.style.visibility = 'hidden'
            addPlaceHolder3.value = ''
        } else if (time.value === '1 Month') {
            ph.style.visibility = 'visible'
            addPlaceHolder2.style.visibility = 'hidden'
            addPlaceHolder3.style.visibility = 'hidden'
            addPlaceHolder2.value = ''
            addPlaceHolder3.value = ''
        }
    })
}

function visible() {

    monText.forEach(mon => {
        if (time.value === '3 Months') {
            mon.style.visibility = 'visible'
        } else if (time.value === '2 Months') {
            mon.style.visibility = 'visible'
            thiMon.style.visibility = 'hidden'
        } else if (time.value === '1 Month') {
            mon.style.visibility = 'visible'
            secMon.style.visibility = 'hidden'
            thiMon.style.visibility = 'hidden'
        }
    })
}

function visibleWk() {
    wkText.forEach(wk => {
        if (time.value === '3 Months') {
            wk.style.visibility = 'visible'

        } else if (time.value === '2 Months') {
            wk.style.visibility = 'visible'
            m3k1.style.visibility = 'hidden'
            addwk3.style.display = "none"
        
        } else if (time.value === '1 Month') {
            wk.style.visibility = 'visible'
            m2k1.style.visibility = 'hidden'
            m3k1.style.visibility = 'hidden'
            addwk2.style.display = "none"
            addwk3.style.display = "none"
        }
    })
}



document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()


next.addEventListener('click', (e) => {
    e.preventDefault()

    form.style.visibility = 'hidden'
    form2.style.visibility = 'visible'

    chooseMons()
    visible()
})


let pushMonths = {
    firstMonth: {
        Month1: "", 
        Week1: "",
        Week2: "",
        Week3: "",
        Week4: "",
    },
    secondMonth: {
        Month2: "",
        Week1: "",
        Week2: "",
        Week3: "",
        Week4: "",
    },
    thirdMonth: {
        Month3: "",
        Week1: "",
        Week2: "",
        Week3: "",
        Week4: "",
    }
};


submitMon.addEventListener('click', (e) => {
    e.preventDefault()
    form3.style.visibility = 'visible'
    form2.style.visibility = 'hidden'

    addPh.forEach(ph => {
        ph.style.visibility = 'hidden'
    })
    monText.forEach(mon => {
        mon.style.visibility = 'hidden'
    })

})



////////////Form-2/////////////////////////////
function lockBtn(){
submitMon.disabled = true;
}

function unlockBtn(){
    submitMon.disabled = false;
}

lockBtn()

form2.addEventListener('change', () => {

    if (time.value === '3 Months') {
        if (x.value !== '' && y.value !== '' && z.value !== '')
        unlockBtn()
     else {
        lockBtn()
    }
}
    else if (time.value === '2 Months') {
        if (x.value !== '' && y.value !== '')
        unlockBtn()
    else {
        lockBtn()
    }
}

    else if (time.value === '1 Month') {
        if (x.value !== '')
        unlockBtn()
    else {
        lockBtn()
    }
}
})

function submitMonth(e) {
    e.preventDefault();

    m.textContent = x.value;
    if (x.value !== '') {
        let m1All = [m1k1, m1k2, m1k3, m1k4]
        
        m1All.forEach(m1 => {
            m1.style.visibility = "visible"
        })   
    }

    n.textContent = y.value;
    if (y.value !== '') {
        let m2All = [m2k1, m2k2, m2k3, m2k4]
        
        m2All.forEach(m1 => {
            m1.style.visibility = "visible"
        })

    }
    
    o.textContent = z.value;
    if (z.value !== '') {
        let m3All = [m3k1, m3k2, m3k3, m3k4]
        
        m3All.forEach(m1 => {
            m1.style.visibility = "visible"
        })
    }

    let monthData = (
        pushMonths.firstMonth.Month1 = x.value,
        pushMonths.secondMonth.Month2 = y.value, 
        pushMonths.thirdMonth.Month3 = z.value
        )

    return monthData
    };


    submitMon.addEventListener('click', submitMonth);



//////////////////////////form-3////////////////////////////////



submitWk.disabled = true;

form3.addEventListener('change', () => {
if (time.value === '1 Month') {
    if (m1k1.value !== '' && m1k2.value !== '' && m1k3.value !== '' && m1k4.value !== '') {
        submitWk.disabled = false;
    }
}

if (time.value === '2 Months') {
    if (
    m1k1.value !== '' && m1k2.value !== '' && m1k3.value !== '' && m1k4.value !== '' &&
    m2k1.value !== '' && m2k2.value !== '' && m2k3.value !== '' && m2k4.value !== ''
    ) {
        submitWk.disabled = false;
    }
}

if (time.value === '3 Months') {
    if (
    m1k1.value !== '' && m1k2.value !== '' && m1k3.value !== '' && m1k4.value !== '' &&
    m2k1.value !== '' && m2k2.value !== '' && m2k3.value !== '' && m2k4.value !== '' &&
    m3k1.value !== '' && m3k2.value !== '' && m3k3.value !== '' && m3k4.value !== '' 
    ) {
        submitWk.disabled = false;
    }
}
})

function submitWeek(e) {
    e.preventDefault()

    form3.style.visibility = 'hidden'
    form4.style.visibility = 'visible'
    form5.style.visibility = 'visible'
    container.style.visibility = 'visible'


    function wk1PlaceHoldersHidden() {
        let wk1PlaceHolders = [m1k1, m1k2, m1k3, m1k4]

        wk1PlaceHolders.forEach(wk=> {
            wk.style.visibility = 'hidden'
        })
    }

    function wk2PlaceHoldersHidden() {
        let wk2PlaceHolders = [m2k1, m2k2, m2k3, m2k4]
        wk2PlaceHolders.forEach(wk=> {
            wk.style.visibility = 'hidden'
        })
    }

    function wk3PlaceHoldersHidden() {
        let wk3PlaceHolders = [m3k1, m3k2, m3k3, m3k4]
        wk3PlaceHolders.forEach(wk=> {
            wk.style.visibility = 'hidden'
        })
    }

    if (time.value === '1 Month') {
        wk1PlaceHoldersHidden()
    }
    
    if (time.value === '2 Months') {
        wk1PlaceHoldersHidden()
        wk2PlaceHoldersHidden()
    }

    if (time.value === '3 Months') {
        wk1PlaceHoldersHidden()
        wk2PlaceHoldersHidden()
        wk3PlaceHoldersHidden()
    }

    let monthData = (
        pushMonths.firstMonth.Week1 = m1k1.value,
        pushMonths.firstMonth.Week2 = mon1wk2.value,
        pushMonths.firstMonth.Week3 = mon1wk3.value,
        pushMonths.firstMonth.Week4 = mon1wk4.value,

        pushMonths.secondMonth.Week1 = m2k1.value,
        pushMonths.secondMonth.Week2 = mon2wk2.value,
        pushMonths.secondMonth.Week3 = mon2wk3.value,
        pushMonths.secondMonth.Week4 = mon2wk4.value,

        pushMonths.thirdMonth.Week1 = m3k1.value,
        pushMonths.thirdMonth.Week2 = mon3wk2.value,
        pushMonths.thirdMonth.Week3 = mon3wk3.value,
        pushMonths.thirdMonth.Week4 = mon3wk4.value
        )

        function submitData(achieve, duration, addText, months) {
            const dataObj = {    
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({    
                "goal": achieve,
                "time": duration,
                "text": addText,
                "month": months,
            })
        }
        
        fetch('http://localhost:3000/users', dataObj)
        .then(res => res.json())
        .then(data => data)
        }
        submitData(goal.value, time.value, text.value, pushMonths)




    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(data => {

data.map(name => {
    if (name.goal !== ' ') {
        goalResult.textContent = name.goal
        goalResult.style.textDecoration = 'underline'
    }
    
    if (name.time !== ' ') {
        timeResult.textContent = `' I will achieve this goal within ${name.time} '`

    }

    if (name.text !== ' ') {
        textResult.textContent = " ' " + name.text  + " ' "
        textResult.style.textAlign = 'center'
    }

    data.map(word => {

        let months1 = word.month.firstMonth.Month1
        let months2 = word.month.secondMonth.Month2
        let months3 = word.month.thirdMonth.Month3

        month1Result.textContent = months1
        month2Result.textContent = months2
        month3Result.textContent = months3

        let mon1wk1 = word.month.firstMonth.Week1


        mon1.textContent = mon1wk1
    })


//Creating a bar graph when a checkbox for month 1 is clicked//

    data.map(ti => {

        let mon1wks = [
            ti.month.firstMonth.Week2, 
            ti.month.firstMonth.Week3, 
            ti.month.firstMonth.Week4
        ]

//time conditions for textContent 


        let month2 = document.getElementById('month2')
        let month3 = document.getElementById('month3')
        let sndh5 = document.getElementById('sndh5')
        let trdh5 = document.getElementById('trdh5')
        let sndMo = document.getElementById('fstMo')
        let trdMo = document.getElementById('trdMo')

        if (ti.time === '1 Month') {
            month2.style.visibility = 'hidden'
            sndh5.style.visibility = 'hidden'
            sndMo.style.visibility = 'hidden'

        }

        if (ti.time === '2 Months' || ti.time === '1 Month') {                
            month3.style.visibility = 'hidden'
            trdh5.style.visibility = 'hidden'
            trdMo.style.visibility = 'hidden'
            }

//Creating a bar graph when a checkbox for month 1 is clicked//

        mon1wks.map((wks, i) => {
            let x = document.createElement("INPUT")
            x.setAttribute('type', 'checkbox')
            x.setAttribute('disabled', 'true')
            x.id = 'box' + i
            let div = document.createElement('div')
            div.id = 'mon1week' + i
            div.textContent = wks
            div.append(x)
            column1.append(div)
        })
    
        let box0 = document.querySelector("#box0")

        box0.addEventListener('change', (e) => {
            if (e.target.checked) {
                m1box2.style.backgroundColor = 'black';
                box0.disabled = true;
                document.getElementById("box1").disabled = false;
                }
            })

        let box1 = document.querySelector("#box1")

        box1.addEventListener('change', (e) => {
            if (e.target.checked) {
                m1box3.style.backgroundColor = 'black';
                box1.disabled = true;
                document.getElementById("box2").disabled = false;
                }
            })

        let box2 = document.querySelector("#box2")

        box2.addEventListener('change', (e) => {
            if (e.target.checked) {
                m1box4.style.backgroundColor = 'black';
                box2.disabled = true;
                alert('Congratulations on completing your first month!')
                if (ti.time === '1 Month') {
                    let boxAll = [m1box1, m1box2, m1box3, m1box4]
                    
                    boxAll.forEach(box => {
                        box.style.backgroundColor = 'red'
                        })
                }

                document.getElementById('box20').disabled = false;
                }
            })

        let mon2wks = [
            ti.month.secondMonth.Week1,
            ti.month.secondMonth.Week2, 
            ti.month.secondMonth.Week3, 
            ti.month.secondMonth.Week4
        ]


        if (ti.time === '2 Months' || ti.time === '3 Months') {


        mon2wks.forEach((wks, i) => {
            let x = document.createElement("INPUT")
            x.setAttribute('type', 'checkbox')
            x.setAttribute('disabled', 'true')
            x.id = 'box2' + i
            let div = document.createElement('div')
            div.id = 'mon2week' + i
            div.textContent = wks
            div.append(x)
            column2.append(div)
        })

        let box20 = document.querySelector("#box20")

        box20.addEventListener('change', (e) => {
            if (e.target.checked) {
                m2box1.style.backgroundColor = 'black';
                box20.disabled = true;
                document.getElementById("box21").disabled = false;
                }
            })

        let box21 = document.querySelector("#box21")

        box21.addEventListener('change', (e) => {
            if (e.target.checked) {
                m2box2.style.backgroundColor = 'black';
                box21.disabled = true;
                document.getElementById("box22").disabled = false;
                }
            })

        let box22 = document.querySelector("#box22")

        box22.addEventListener('change', (e) => {
            if (e.target.checked) {
                m2box3.style.backgroundColor = 'black';
                box22.disabled = true;
                document.getElementById('box23').disabled = false;
                }
            })

        let box23 = document.querySelector("#box23")

        box23.addEventListener('change', (e) => {
            if (e.target.checked) {
                m2box4.style.backgroundColor = 'black';
                box23.disabled = true;
                alert('Congratulations on completing your second month!')
                if (ti.time === '2 Months') {
                let boxAll = [m1box1, m1box2, m1box3, m1box4,
                              m2box1, m2box2, m2box3, m2box4]
                    
                boxAll.forEach(box => {
                    box.style.backgroundColor = 'red'
                    })
                }
                document.getElementById("box30").disabled = false;
                }
            })
        }

        let mon3wks = [
            ti.month.thirdMonth.Week1,
            ti.month.thirdMonth.Week2, 
            ti.month.thirdMonth.Week3, 
            ti.month.thirdMonth.Week4
        ]

        if (ti.time === '3 Months') {

        mon3wks.map((wks, i) => {
            let x = document.createElement("INPUT")
            x.setAttribute('type', 'checkbox')
            x.setAttribute('disabled', 'true')
            x.id = 'box3' + i
            let div = document.createElement('div')
            div.id = 'mon3week' + i
            div.textContent = wks
            div.append(x)
            column3.append(div)
            })


        let box30 = document.querySelector("#box30")

        box30.addEventListener('change', (e) => {
            if (e.target.checked) {
                m3box1.style.backgroundColor = 'black';
                box30.disabled = true;
                document.getElementById("box31").disabled = false;
                }
            })

            let box31 = document.querySelector("#box31")

            box31.addEventListener('change', (e) => {
            if (e.target.checked) {
                m3box2.style.backgroundColor = 'black';
                box31.disabled = true;
                document.getElementById("box32").disabled = false;
                }
            })

            let box32 = document.querySelector("#box32")

            box32.addEventListener('change', (e) => {
                if (e.target.checked) {
                m3box3.style.backgroundColor = 'black';
                box32.disabled = true;
                document.getElementById("box33").disabled = false;
                }
            })

            let box33 = document.querySelector("#box33")

            box33.addEventListener('change', (e) => {
            if (e.target.checked) {
                m3box4.style.backgroundColor = 'black';

                let boxAll = [m1box1, m1box2, m1box3, m1box4,
                            m2box1, m2box2, m2box3, m2box4,
                            m3box1, m3box2, m3box3, m3box4]

                boxAll.forEach(box => {
                box.style.backgroundColor = 'red'
                })

                alert('CONGRATULATIONS!!! YOU COMPLETED A THREE MONTH GOAL!')
                box33.disabled = true;

                }
            })
        }
    })
})


let checkbox = document.querySelectorAll('#mo1')

checkbox.forEach(box => {
box.addEventListener('change', () => {
    if (box.checked = true) {
            m1box1.style.backgroundColor = 'black';
            box.disabled = true;
            document.getElementById("box0").disabled = false;
            }
        })
    })
})


return monthData  
    
    
}

submitWk.addEventListener('click', submitWeek)


})