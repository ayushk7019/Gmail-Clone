const emailLines = document.getElementsByClassName("email-lines")[0];
let mails = []; 

let currentType = 0;
let types = ['primary' , 'social' , 'promotions' , 'updates'];

async function fetchMails() {

  try {
    const response = await fetch("http://localhost:8000/api/mail/getAll");
    const data = await response.json();
    // console.log(data);
    mails = data;
    renderMails(mails);
  } catch (error) {
    emailLines.innerHTML = `<p>Error fetching mails: ${error.message}</p>`;
  }
}

function renderMails(mailsTotal) {
  let z = 0;

  //notification update center

  const mails = mailsTotal.filter(mail=> mail['type']==types[currentType]);
  // print(mails);
  console.log(mails);
  emailLines.innerHTML = "";
  mails.forEach(mail => {
    const mailRow = document.createElement("div");
    mailRow.classList.add("mail-row");
    if(mail.status == 'unseen')    mailRow.classList.add("unseen");
    mailRow.setAttribute('data' , mail._id)
    
    mailRow.innerHTML = `
      <div class="left">
          <input type="checkbox">
          <div class="star ${mail.starred ? "starred" : ""}" data="${mail._id}"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.885 8.20337L13.0618 8.61938L13.512 8.65845L18.3303 9.06665L14.6702 12.2385L14.3284 12.5354L14.4309 12.9758L15.5305 17.6887L11.3879 15.1887L11.0002 14.9543L10.6125 15.1887L6.46899 17.6887L7.5686 12.9758L7.67114 12.5354L7.32935 12.2385L3.66821 9.06665L8.48755 8.65845L8.93774 8.61938L9.1145 8.20337L10.9993 3.75513L12.885 8.20337Z" stroke="black" stroke-opacity="0.16" stroke-width="1.5"/></svg></div>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2913 5.50024C13.5618 5.50024 13.8056 5.61604 13.9709 5.79907L14.0364 5.88208L14.0383 5.88403L17.6672 11.0002L14.0383 16.1165L14.0364 16.1184C13.874 16.3481 13.6003 16.4993 13.2913 16.4993L4.9563 16.4915L8.39868 11.5217L8.76001 11.0002L8.39868 10.4778L4.9563 5.50708L13.2913 5.50024Z" stroke="black" stroke-opacity="0.16" stroke-width="1.83333"/></svg>
          <span>${mail['sender'].split('@')[0]}</span>
      </div>

      <div class="preview">
          <b>${mail['subject']}</b> - 
          ${mail['body']}
      </div>
      <div class="right">
          <div class="timing">${getFormattedTime(mail['createdAt'])}</div>
          <div class="hidden-menu">
              <div class="menus"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_482_1985)"><path d="M18.8283 4.79417L17.5542 3.25417C17.3067 2.9425 16.9308 2.75 16.5 2.75H5.5C5.06917 2.75 4.69333 2.9425 4.43667 3.25417L3.17167 4.79417C2.90583 5.10583 2.75 5.51833 2.75 5.95833V17.4167C2.75 18.425 3.575 19.25 4.58333 19.25H17.4167C18.425 19.25 19.25 18.425 19.25 17.4167V5.95833C19.25 5.51833 19.0942 5.10583 18.8283 4.79417ZM11 16.0417L5.95833 11H9.16667V9.16667H12.8333V11H16.0417L11 16.0417ZM4.69333 4.58333L5.43583 3.66667H16.4358L17.2975 4.58333H4.69333Z" fill="black" fill-opacity="0.54"/></g><defs><clipPath id="clip0_482_1985"><rect width="22" height="22" fill="white"/></clipPath></defs></svg></div>
              <div class="menus delete-btn" data="${mail._id}" ><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.50004 17.4167C5.50004 18.425 6.32504 19.25 7.33337 19.25H14.6667C15.675 19.25 16.5 18.425 16.5 17.4167V6.41667H5.50004V17.4167ZM17.4167 3.66667H14.2084L13.2917 2.75H8.70837L7.79171 3.66667H4.58337V5.5H17.4167V3.66667Z" fill="black" fill-opacity="0.54"/></svg></div>
              <div class="menus"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.147 6.47368H14.807L9.65 3.78947L3.8 6.83158V15.4211C2.81 15.4211 2 14.6158 2 13.6316V6.62579C2 6.15158 2.288 5.65053 2.72 5.42684L9.65 2L16.436 5.42684C16.823 5.63263 17.093 6.05316 17.147 6.47368ZM18.2 7.36842H6.5C5.51 7.36842 4.7 8.17368 4.7 9.15789V17.2105C4.7 18.1947 5.51 19 6.5 19H18.2C19.19 19 20 18.1947 20 17.2105V9.15789C20 8.17368 19.19 7.36842 18.2 7.36842ZM18.2 10.6521L12.35 13.6316L6.5 10.6521V9.15789L12.35 12.1374L18.2 9.15789V10.6521Z" fill="black" fill-opacity="0.54"/></svg></div>
              <div class="menus"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 1.83334C5.95837 1.83334 1.83337 5.95834 1.83337 11C1.83337 16.0417 5.95837 20.1667 11 20.1667C16.0417 20.1667 20.1667 16.0417 20.1667 11C20.1667 5.95834 16.0417 1.83334 11 1.83334ZM14.85 14.85L10.0834 11.9167V6.41668H11.4584V11.1833L15.5834 13.6583L14.85 14.85Z" fill="black" fill-opacity="0.54"/></svg></div>
          </div>                        
      </div>
    `;
    emailLines.appendChild(mailRow);
    z++;

    //star
    const stars = mailRow.querySelectorAll('.star');
    stars.forEach((star)=>{
      star.addEventListener('click', async () => {
        const id = star.getAttribute('data');
        try {
          const res = await fetch(`http://localhost:8000/api/mail/star/${id}`, {method: 'PUT'});
          if (res.ok == false) throw new Error('error');    
          star.classList.toggle('starred');
        } catch (err) {
          console.error('error in starring', err);
        }
      });
    })

    //delete btn
    const delBtns = mailRow.querySelectorAll('.delete-btn');
    delBtns.forEach((btn)=>{
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data');
        try {
          const res = await fetch(`http://localhost:8000/api/mail/delete/${id}`, {method: 'DELETE'});
          if (res.ok == false) throw new Error('error');  
          fetchMails();

        } catch (err) {
          console.error('error in deletion', err);
        }
      });
    })

    //seen button
    mailRow.addEventListener('click' , async() =>{
      const id = mailRow.getAttribute('data');
      // console.log(id);
      try {
          const res = await fetch(`http://localhost:8000/api/mail/seen/${id}`, {method: 'PUT'});
          if (res.ok == false) throw new Error('error');  
          fetchMails();
        } catch (err) {
          console.error('error in seeing', err);
        }

    })

    //updating the notification count feature
    document.querySelector('#number-of-mails').innerHTML = `1 - ${z} of ${z}`;


  });
}

fetchMails();

function getFormattedTime(isoString) {
  const date = new Date(isoString);
  let hour = date.getHours();
  const min = date.getMinutes();
  if(hour >=12)ap = 'PM'
  else ap = 'AM'
  if(hour == 0) hour = 12;  
  return `${String(hour)}:${String(min)} ${ap}`;
}


const categoryItems = document.getElementsByClassName('email-category-item');
Array.from(categoryItems).forEach((categoryItem,index) => {
  categoryItem.addEventListener('click', () => {
    categoryItems[currentType].classList.remove('selected');
    currentType = index;
    categoryItems[currentType].classList.add('selected');
    
    fetchMails();
  });
});


