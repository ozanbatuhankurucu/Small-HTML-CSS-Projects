import { FC, InputHTMLAttributes, ReactNode } from 'react'
import cx from 'classnames'

interface InputLabelProps {
  label: string
  isInputFocused: boolean
  value: InputHTMLAttributes<HTMLInputElement>['value']
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange']
  id: InputHTMLAttributes<HTMLInputElement>['id']
  type: InputHTMLAttributes<HTMLInputElement>['type']
  required?: InputHTMLAttributes<HTMLInputElement>['required']
  onFocus: InputHTMLAttributes<HTMLInputElement>['onFocus']
  onBlur: InputHTMLAttributes<HTMLInputElement>['onBlur']
  children?: ReactNode
}
const InputLabel: FC<InputLabelProps> = ({
  label,
  isInputFocused,
  value,
  onChange,
  id,
  onBlur,
  onFocus,
  type,
  required,
  children
}) => (
  <>
    <label
      className='absolute top-4 text-base font-bold text-gray-500'
      htmlFor='e'>
      {label.split('').map((letter, index) => (
        <span
          style={{ transitionDelay: `${index * 50}ms` }}
          className={cx('inline-block transition-all duration-150', {
            '-translate-y-6 !text-black': isInputFocused || value
          })}>
          {letter}
        </span>
      ))}
    </label>
    <input
      value={value}
      onChange={onChange}
      className={cx(
        'text-black border-0 bg-transparent border-b-2 border-gray-300 py-4',
        {
          '!outline-none !caret-black !border-b-black': isInputFocused || value
        }
      )}
      id={id}
      type={type}
      required={required}
      onFocus={onFocus}
      onBlur={onBlur}
    />
    {children}
  </>
)

export default InputLabel
