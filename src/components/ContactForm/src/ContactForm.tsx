import React from 'react'

import styles from '../styles.module.scss'

const ContactForm = (props: { visible: boolean }) => {
  const [name, setName] = React.useState<string>(null)
  const [email, setEmail] = React.useState<string>(null)
  const [message, setMessage] = React.useState<string>(null)

  return (
    <div className={styles.ContactForm}>
      <form onSubmit={() => console.log('hello')}>
        <input
          type="text"
          value={name}
          onChange={x => setName(x.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={x => setEmail(x.target.value)}
        />
        <textarea value={message} onChange={x => setMessage(x.target.value)} />
      </form>
    </div>
  )
}

export default ContactForm
