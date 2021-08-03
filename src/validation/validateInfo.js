export default function validateInfo(values) {
    let errors = {};

    //Name
    if (!values.name.trim()) {
        errors.name = "Name is required!";
    }

    //Email
    if (!values.email) {
        errors.email = "Email required!";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid!";
    }

    //Phone
    if (!values.phone) {
        errors.phone = "Contact Number is required!";
    } else if (values.phone.length !== 10) {
        errors.phone = "Contact Number is invalid!";
    }

    return errors;

}