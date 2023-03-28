import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { DatePicker } from 'antd'
import { useGetPostQuery } from '../graphql/types'
import { Breadcrumb } from '../components/Breadcrumb';
import { HomeCarousel } from '../components/HomeCarousel';

import styles from '../styles/Home.module.scss'

const breadcrumbItems = [{ name: "Home" }, { name: "Sub Level" }, { name: 'Sub Level2' }];

const Home: NextPage = () => {
  // const { data, error, loading } = useGetPostQuery();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Breadcrumb items={breadcrumbItems} />

        <HomeCarousel />

        <div className="mt-8">
          <h3>Datepicker from Ant Design</h3>
          <DatePicker />
        </div>

        {/* <p className={styles.description}>
          {loading && "Loading"}
          {error && "Error happened!"}
          {!loading && !error && "Data loaded successfully"}
        </p>

        <div className={styles.grid}>
          {data && data.getPosts?.map(post => (
            <a
              key={post?.id}
              href="https://nextjs.org/docs"
              className={styles.card}
            >
              <p>id: {post?.id}</p>
              <p>{post?.body}</p>
            </a>
          ))}
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home