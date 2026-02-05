document.addEventListener('alpine:init', ()=> {
    Alpine.data('logInForm' , () =>({
        username:'' ,
        email: '',
        password: '',
        showPassword:false,
        year:'',
        showMessage:false,
        errors: {},

        // For Get the year from user 
         get years() {
            const currentYear = new Date().getFullYear();
            const startYear = 1950; // Change this to your desired start year
            const yearArray = [];
            
            for (let year = currentYear; year >= startYear; year--) {
                yearArray.push(year);
            }
            
            return yearArray;
        },

        validateForm(){
            this.errors= {};

            if(this.username.length < 3 ){
                this.errors.username = 'Username must be at least 3 characters!';
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRegex.test(this.email)){
                this.errors.email = 'Please enter a valid email!';
            }

            if(this.password.length < 6 ){
                this.errors.password = 'Password must be at least 6 characters!';
            }

            if(this.username.year === ''){
                this.errors.year = 'Please select the year ';
            }
        },
    }))
})
