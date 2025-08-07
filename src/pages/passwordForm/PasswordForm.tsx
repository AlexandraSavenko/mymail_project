import PasswordCo from "../../components/passwordCo/PasswordCo";

const PasswordForm = () => {
return <div>
    <PasswordCo inputType={"password"} clearable={false} labelValue={"password"} />
    <PasswordCo inputType={"text"} clearable={true} labelValue={"text"} />
    <PasswordCo inputType={"number"} clearable={true} labelValue={"number"} />
</div>
}

export default PasswordForm;