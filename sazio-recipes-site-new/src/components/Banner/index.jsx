import style from './index.module.css'

export default function Banner({ title }) {
  return (
    <section className={style.banner}>
      <div className={style.banner__content}>
        <h1 className={style.banner__title}>{title}</h1>
        <p className={style.banner__subtitle}>Discover authentic Ghanaian cuisine!</p>
      </div>
    </section>
  );
}
