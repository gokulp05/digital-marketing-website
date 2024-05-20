let faqs = [...document.querySelectorAll('.faq')];
faqs.map((faq)=>{
    let ques = faq.querySelector('.question_box');
    
    ques.addEventListener('click', ()=>{
        faq.classList.toggle('active');     // This is a topic from WebAPIs
    })
})


