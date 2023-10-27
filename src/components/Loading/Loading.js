import style from "./Loading.module.scss";

export default function Loading() {
  return (
    <div className="flex-fill d-flex flex-column justify-content-center align-items-center">
      <i className={`fa-solid fa-spinner  ${style.spinner}`}></i>
    </div>
  );
}
