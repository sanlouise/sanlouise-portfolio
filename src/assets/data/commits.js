const commits = [
  [3, "2016-09-25"],
  [2, "2016-09-26"],
  [32, "2016-09-27"],
  [23, "2016-09-28"],
  [31, "2016-09-29"],
  [15, "2016-09-30"],
  [2, "2016-10-01"],
  [2, "2016-10-02"],
  [0, "2016-10-03"],
  [4, "2016-10-04"],
  [5, "2016-10-05"],
  [20, "2016-10-06"],
  [1, "2016-10-07"],
  [1, "2016-10-08"],
  [2, "2016-10-09"],
  [10, "2016-10-10"],
  [3, "2016-10-11"],
  [2, "2016-10-12"],
  [2, "2016-10-13"],
  [3, "2016-10-14"],
  [2, "2016-10-15"],
  [4, "2016-10-16"],
  [3, "2016-10-17"],
  [3, "2016-10-18"],
  [3, "2016-10-19"],
  [2, "2016-10-20"],
  [3, "2016-10-21"],
  [3, "2016-10-22"],
  [1, "2016-10-23"],
  [0, "2016-10-24"],
  [3, "2016-10-25"],
  [1, "2016-10-26"],
  [40, "2016-10-27"],
  [15, "2016-10-28"],
  [3, "2016-10-29"],
  [3, "2016-10-30"],
  [6, "2016-10-31"],
  [0, "2016-11-01"],
  [1, "2016-11-02"],
  [3, "2016-11-03"],
  [1, "2016-11-04"],
  [1, "2016-11-05"],
  [2, "2016-11-06"],
  [1, "2016-11-07"],
  [0, "2016-11-08"],
  [1, "2016-11-09"],
  [1, "2016-11-10"],
  [1, "2016-11-11"],
  [2, "2016-11-12"],
  [1, "2016-11-13"],
  [0, "2016-11-14"],
  [1, "2016-11-15"],
  [2, "2016-11-16"],
  [0, "2016-11-17"],
  [2, "2016-11-18"],
  [2, "2016-11-19"],
  [2, "2016-11-20"],
  [2, "2016-11-21"],
  [2, "2016-11-22"],
  [3, "2016-11-23"],
  [1, "2016-11-24"],
  [0, "2016-11-25"],
  [2, "2016-11-26"],
  [0, "2016-11-27"],
  [1, "2016-11-28"],
  [2, "2016-11-29"],
  [2, "2016-11-30"],
  [2, "2016-12-01"],
  [3, "2016-12-02"],
  [1, "2016-12-03"],
  [0, "2016-12-04"],
  [1, "2016-12-05"],
  [1, "2016-12-06"],
  [0, "2016-12-07"],
  [2, "2016-12-08"],
  [2, "2016-12-09"],
  [3, "2016-12-10"],
  [3, "2016-12-11"],
  [2, "2016-12-12"],
  [1, "2016-12-13"],
  [2, "2016-12-14"],
  [3, "2016-12-15"],
  [3, "2016-12-16"],
  [4, "2016-12-17"],
  [0, "2016-12-18"],
  [3, "2016-12-19"],
  [2, "2016-12-20"],
  [3, "2016-12-21"],
  [0, "2016-12-22"],
  [3, "2016-12-23"],
  [3, "2016-12-24"],
  [1, "2016-12-25"],
  [1, "2016-12-26"],
  [1, "2016-12-27"],
  [0, "2016-12-28"],
  [2, "2016-12-29"],
  [3, "2016-12-30"],
  [2, "2016-12-31"],
  [2, "2017-01-01"],
  [0, "2017-01-02"],
  [1, "2017-01-03"],
  [1, "2017-01-04"],
  [2, "2017-01-05"],
  [2, "2017-01-06"],
  [1, "2017-01-07"],
  [0, "2017-01-08"],
  [3, "2017-01-09"],
  [3, "2017-01-10"],
  [2, "2017-01-11"],
  [4, "2017-01-12"],
  [0, "2017-01-13"],
  [2, "2017-01-14"],
  [1, "2017-01-15"],
  [12, "2017-01-16"],
  [12, "2017-01-17"],
  [5, "2017-01-18"],
  [7, "2017-01-19"],
  [5, "2017-01-20"],
  [3, "2017-01-21"],
  [3, "2017-01-22"],
  [11, "2017-01-23"],
  [5, "2017-01-24"],
  [6, "2017-01-25"],
  [3, "2017-01-26"],
  [5, "2017-01-27"],
  [2, "2017-01-28"],
  [4, "2017-01-29"],
  [6, "2017-01-30"],
  [1, "2017-01-31"],
  [1, "2017-02-01"],
  [1, "2017-02-02"],
  [7, "2017-02-03"],
  [3, "2017-02-04"],
  [1, "2017-02-05"],
  [9, "2017-02-06"],
  [5, "2017-02-07"],
  [0, "2017-02-08"],
  [0, "2017-02-09"],
  [12, "2017-02-10"],
  [3, "2017-02-11"],
  [1, "2017-02-12"],
  [0, "2017-02-13"],
  [3, "2017-02-14"],
  [0, "2017-02-15"],
  [3, "2017-02-16"],
  [3, "2017-02-17"],
  [3, "2017-02-18"],
  [0, "2017-02-19"],
  [4, "2017-02-20"],
  [12, "2017-02-21"],
  [4, "2017-02-22"],
  [3, "2017-02-23"],
  [2, "2017-02-24"],
  [1, "2017-02-25"],
  [1, "2017-02-26"],
  [1, "2017-02-27"],
  [2, "2017-02-28"],
  [0, "2017-03-01"],
  [1, "2017-03-02"],
  [1, "2017-03-03"],
  [3, "2017-03-04"],
  [1, "2017-03-05"],
  [2, "2017-03-06"],
  [2, "2017-03-07"],
  [0, "2017-03-08"],
  [21, "2017-03-09"],
  [13, "2017-03-10"],
  [2, "2017-03-11"],
  [2, "2017-03-12"],
  [0, "2017-03-13"],
  [1, "2017-03-14"],
  [2, "2017-03-15"],
  [2, "2017-03-16"],
  [2, "2017-03-17"],
  [3, "2017-03-18"],
  [0, "2017-03-19"],
  [3, "2017-03-20"],
  [0, "2017-03-21"],
  [13, "2017-03-22"],
  [2, "2017-03-23"],
  [3, "2017-03-24"],
  [2, "2017-03-25"],
  [3, "2017-03-26"],
  [2, "2017-03-27"],
  [0, "2017-03-28"],
  [1, "2017-03-29"],
  [1, "2017-03-30"],
  [3, "2017-03-31"],
  [3, "2017-04-01"],
  [2, "2017-04-02"],
  [2, "2017-04-03"],
  [1, "2017-04-04"],
  [7, "2017-04-05"],
  [2, "2017-04-06"],
  [7, "2017-04-07"],
  [0, "2017-04-08"],
  [3, "2017-04-09"],
  [4, "2017-04-10"],
  [3, "2017-04-11"],
  [2, "2017-04-12"],
  [4, "2017-04-13"],
  [1, "2017-04-14"],
  [0, "2017-04-15"],
  [4, "2017-04-16"],
  [3, "2017-04-17"],
  [3, "2017-04-18"],
  [0, "2017-04-19"],
  [2, "2017-04-20"],
  [1, "2017-04-21"],
  [1, "2017-04-22"],
  [1, "2017-04-23"],
  [3, "2017-04-24"],
  [3, "2017-04-25"],
  [2, "2017-04-26"],
  [3, "2017-04-27"],
  [3, "2017-04-28"],
  [5, "2017-04-29"],
  [1, "2017-04-30"],
  [3, "2017-05-01"],
  [7, "2017-05-02"],
  [7, "2017-05-03"],
  [10, "2017-05-04"],
  [5, "2017-05-05"],
  [2, "2017-05-06"],
  [0, "2017-05-07"],
  [4, "2017-05-08"],
  [2, "2017-05-09"],
  [0, "2017-05-10"],
  [1, "2017-05-11"],
  [31, "2017-05-12"],
  [3, "2017-05-13"],
  [3, "2017-05-14"],
  [0, "2017-05-15"],
  [2, "2017-05-16"],
  [8, "2017-05-17"],
  [4, "2017-05-18"],
  [3, "2017-05-19"],
  [5, "2017-05-20"],
  [16, "2017-05-21"],
  [13, "2017-05-22"],
  [2, "2017-05-23"],
  [5, "2017-05-24"],
  [3, "2017-05-25"],
  [4, "2017-05-26"],
  [3, "2017-05-27"],
  [4, "2017-05-28"],
  [13, "2017-05-29"],
  [3, "2017-05-30"],
  [0, "2017-05-31"],
  [1, "2017-06-01"],
  [2, "2017-06-02"],
  [1, "2017-06-03"],
  [2, "2017-06-04"],
  [3, "2017-06-05"],
  [6, "2017-06-06"],
  [16, "2017-06-07"],
  [1, "2017-06-08"],
  [4, "2017-06-09"],
  [3, "2017-06-10"],
  [2, "2017-06-11"],
  [3, "2017-06-12"],
  [0, "2017-06-13"],
  [3, "2017-06-14"],
  [0, "2017-06-15"],
  [0, "2017-06-16"],
  [1, "2017-06-17"],
  [2, "2017-06-18"],
  [2, "2017-06-19"],
  [1, "2017-06-20"],
  [0, "2017-06-21"],
  [0, "2017-06-22"],
  [0, "2017-06-23"],
  [1, "2017-06-24"],
  [1, "2017-06-25"],
  [8, "2017-06-26"],
  [7, "2017-06-27"],
  [8, "2017-06-28"],
  [8, "2017-06-29"],
  [12, "2017-06-30"],
  [5, "2017-07-01"],
  [8, "2017-07-02"],
  [9, "2017-07-03"],
  [3, "2017-07-04"],
  [3, "2017-07-05"],
  [13, "2017-07-06"],
  [7, "2017-07-07"],
  [3, "2017-07-08"],
  [1, "2017-07-09"],
  [7, "2017-07-10"],
  [7, "2017-07-11"],
  [6, "2017-07-12"],
  [11, "2017-07-13"],
  [11, "2017-07-14"],
  [5, "2017-07-15"],
  [3, "2017-07-16"],
  [2, "2017-07-17"],
  [18, "2017-07-18"],
  [22, "2017-07-19"],
  [11, "2017-07-20"],
  [1, "2017-07-21"],
  [1, "2017-07-22"],
  [13, "2017-07-23"],
  [17, "2017-07-24"],
  [26, "2017-07-25"],
  [14, "2017-07-26"],
  [14, "2017-07-27"],
  [8, "2017-07-28"],
  [1, "2017-07-29"],
  [3, "2017-07-30"],
  [6, "2017-07-31"],
  [6, "2017-08-01"],
  [3, "2017-08-02"],
  [4, "2017-08-03"],
  [6, "2017-08-04"],
  [13, "2017-08-05"],
  [2, "2017-08-06"],
  [12, "2017-08-07"],
  [17, "2017-08-08"],
  [5, "2017-08-09"],
  [5, "2017-08-10"],
  [6, "2017-08-11"],
  [3, "2017-08-12"],
  [2, "2017-08-13"],
  [8, "2017-08-14"],
  [5, "2017-08-15"],
  [8, "2017-08-16"],
  [1, "2017-08-17"],
  [3, "2017-08-18"],
  [3, "2017-08-19"],
  [0, "2017-08-20"],
  [2, "2017-08-21"],
  [7, "2017-08-22"],
  [9, "2017-08-23"],
  [8, "2017-08-24"],
  [3, "2017-08-25"],
  [6, "2017-08-26"],
  [1, "2017-08-27"],
  [11, "2017-08-28"],
  [20, "2017-08-29"],
  [25, "2017-08-30"],
  [3, "2017-08-31"],
  [8, "2017-09-01"],
  [1, "2017-09-02"],
  [7, "2017-09-03"],
  [3, "2017-09-04"],
  [7, "2017-09-05"],
  [7, "2017-09-06"],
  [2, "2017-09-07"],
  [0, "2017-09-08"],
  [4, "2017-09-09"],
  [14, "2017-09-10"],
  [26, "2017-09-11"],
  [14, "2017-09-12"],
  [2, "2017-09-13"],
  [20, "2017-09-14"],
  [9, "2017-09-15"],
  [7, "2017-09-16"],
  [6, "2017-09-17"],
  [10, "2017-09-18"],
  [4, "2017-09-19"],
  [7, "2017-09-20"],
  [6, "2017-09-21"],
  [6, "2017-09-22"],
  [0, "2017-09-23"],
  [3, "2017-09-24"],
  [10, "2017-09-25"],
  [3, "2017-09-26"],
];

export default commits;
