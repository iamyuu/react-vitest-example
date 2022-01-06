import "@testing-library/jest-dom/extend-expect"

import { render, screen } from "@testing-library/react"
import App from "./App"

test("should be show the title", () => {
	render(<App />)

	// https://github.com/testing-library/jest-dom#tobeinthedocument
	expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
})
