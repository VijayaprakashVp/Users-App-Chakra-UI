import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Users } from "./Components/Users";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserDetails } from "./Components/UserDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/userdetails/:id" element={<UserDetails />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
