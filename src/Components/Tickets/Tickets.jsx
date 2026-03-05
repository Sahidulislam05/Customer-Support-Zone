import calender from "../../assets/ri_calendar-line.png";
import { use, useEffect } from "react";

import { toast, ToastContainer } from "react-toastify";

const Tickets = ({
  fetchPromise,
  count,
  setCount,
  selectedCards,
  setSelectedCards,
  resolved,
  setResolve,
  ticket,
  setTicket,
}) => {
  const promiseData = use(fetchPromise);

  useEffect(() => {
    if (ticket.length === 0 && promiseData) {
      setTicket(promiseData);
    }
  }, [promiseData, ticket, setTicket]);

  const handleCounter = (card) => {
    setCount(count + 1);
    setSelectedCards([...selectedCards, card]);
    toast.success("In progress!");
  };

  const handleResolve = (card) => {
    const newSelectedCard = selectedCards.filter(
      (cards) => cards.id !== card.id
    );
    setSelectedCards(newSelectedCard);

    setResolve([...resolved, card]);
    setCount(count - 1);
    toast.success("Completed!");

    setTicket(ticket.filter((cards) => cards.id !== card.id));
  };
  // console.log(selectedCards);
  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-1 md:grid-cols-12 justify-center gap-8">
        <div className="col-span-full md:col-span-10">
          <h1 className="text-2xl font-bold text-center md:text-left">
            Customer Tickets
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-7 gap-6">
            {ticket.map((card, index) => (
              <div key={index} className="card bg-base-100 card-md shadow-sm">
                <div
                  onClick={() => {
                    handleCounter(card);
                  }}
                  className="card-body"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="card-title">{card.title}</h2>
                    <div>
                      <button
                        className={`btn rounded-xl ${
                          card.status == "In Progress"
                            ? "bg-[#F8F3B9] "
                            : "bg-[#B9F8CF]"
                        } `}
                      >
                        <div
                          className={`w-3 h-3 rounded-full mr-1 ${
                            card.status == "In Progress"
                              ? "bg-yellow-400"
                              : "bg-green-500"
                          }`}
                        />
                        {card.status}
                      </button>
                    </div>
                  </div>
                  <p> {card.description} </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <h3> #{card.id} </h3>
                      <h3
                        className={`font-semibold ${
                          card.priority == "HIGH PRIORITY"
                            ? "text-red-500"
                            : card.priority == "MEDIUM PRIORITY"
                            ? "text-[#FEBB0C] "
                            : card.priority == "LOW PRIORITY"
                            ? "text-[#02A53B]"
                            : ""
                        }`}
                      >
                        {card.priority}
                      </h3>
                    </div>
                    <div className="flex gap-4">
                      <h2> {card.customer} </h2>
                      <img src={calender} alt="" />
                      <p className="">{card.createdAt} </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Part 2 right side section  */}
        </div>
        <div className="col-span-full md:col-span-2">
          <h1 className="text-2xl font-bold text-center md:text-left"> Task Status</h1>
          <div className="mt-7 text-center md:text-left">
            {selectedCards.length === 0 ? (
              <p className="mt-4">Select a ticket to add to Task Status</p>
            ) : (
              <div className="mt-6 ">
                {selectedCards.map((card, index) => (
                  <div
                    key={index}
                    className="card bg-base-100 mt-2 shadow-sm p-2 rounded-xl"
                  >
                    <span>{card.title}</span>
                    <button
                      onClick={() => handleResolve(card)}
                      className="bg-[#02A53B] w-full text-white px-2 py-1 mt-2 rounded"
                    >
                      Complete
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div>
              <h1 className="text-2xl font-bold mt-9  ">Resolved Task</h1>

              {resolved.length === 0 ? (
                <p className="mt-4">No resolved tasks yet.</p>
              ) : (
                <div className="mt-6">
                  {resolved.map((card, index) => (
                    <div
                      key={index}
                      className="card mt-2 shadow-xl p-2 bg-[#E0E7FF] rounded-xl text-center"
                    >
                      <span>{card.title}</span>
                      <h2 className="text-[#02A53B] font-semibold  ">
                        ✅Completed
                      </h2>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Tickets;
