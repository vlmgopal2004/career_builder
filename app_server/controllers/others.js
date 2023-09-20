/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About CareerBuilder',
        content: 'CareerBuilder is a leading online job portal and career resource platform designed to help individuals find the perfect job and employers to discover top talent. With a user-friendly interface and a vast array of features, CareerBuilder has become a trusted resource for job seekers and employers alike.'
    });
  };
