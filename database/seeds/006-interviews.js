exports.seed = async knex => {
  await knex("interviews").insert([
    { interviewNumber: 1, interviewDate: "June 1", interviewTime: "1:00PM", interviewLocation: "Virtual", interviewType: "Phone" },
    { interviewNumber: 2, interviewDate: "July 1", interviewTime: "3:00PM", interviewLocation: "Virtual", interviewType: "Zoom" },
    { interviewNumber: 3, interviewDate: "August 1", interviewTime: "2:00PM", interviewLocation: "25 Main Street", interviewType: "In person" },
  ]);
};
