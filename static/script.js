const container=document.querySelector('.container');
const LoginLink=document.querySelector('.SignInLink')
const RegisterLink=document.querySelector('.SignUpLink')


RegisterLink.addEventListener('click', ()=> {
    container.classList.add('active');
})
LoginLink.addEventListener('click', ()=> {
    container.classList.remove('active');
})

// การตรวจสอบรูปแบบข้อมูล
function validateForm() {
    const username = document.querySelector('.Login input[type="text"]').value;
    const password = document.querySelector('.Login input[type="password"]').value;
    if (!username || !password) {
        showAlert('Please fill in all fields.');
        return false;
    }
    return true;
}

document.querySelector('.Login form').addEventListener('submit', (e) => {
    if (!validateForm()) {
        e.preventDefault();
    }
});


// ฟังก์ชันสำหรับเช็คความแข็งแกร่งของรหัสผ่าน
function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthBar = document.getElementById('passwordStrength');
    let strength = 0;

    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
        strength += 1;
    }

    switch (strength) {
        case 0:
            strengthBar.style.width = '0';
            break;
        case 1:
            strengthBar.style.width = '25%';
            strengthBar.style.backgroundColor = 'red';
            break;
        case 2:
            strengthBar.style.width = '50%';
            strengthBar.style.backgroundColor = 'orange';
            break;
        case 3:
            strengthBar.style.width = '75%';
            strengthBar.style.backgroundColor = 'yellow';
            break;
        case 4:
            strengthBar.style.width = '100%';
            strengthBar.style.backgroundColor = 'green';
            break;
    }
}


// การแจ้งเตือนแบบ Real-time เมื่อผู้ใช้กรอกข้อมูล
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() === '') {
            input.style.borderColor = 'red';
            showAlert('This field is required.');
        } else {
            input.style.borderColor = 'initial';
        }
    });
});


// ฟังก์ชันการเข้าสู่ระบบ
function login(event) {
    event.preventDefault(); // ป้องกันการรีเฟรชหน้า

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ตัวอย่างการตรวจสอบข้อมูล (คุณต้องใช้ระบบ Backend ในการตรวจสอบจริง)
    if (username === "user" && password === "password") {
        showNotification(); // แสดงการแจ้งเตือนเมื่อเข้าสู่ระบบสำเร็จ
    } else {
        alert('Invalid username or password');
    }
}

// ฟังก์ชันแสดงการแจ้งเตือน
function showNotification() {
    const notification = document.getElementById('loginNotification');
    notification.style.display = 'block'; // แสดงการแจ้งเตือน

    // ซ่อนการแจ้งเตือนหลังจาก 3 วินาที
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

