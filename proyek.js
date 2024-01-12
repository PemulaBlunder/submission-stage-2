const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5500;


const projects = [
  { id: 1, name: 'Proyek A' },
  { id: 2, name: 'Proyek B' },
];


const users = [
  { id: 1, username: 'user1', projectId: 1 },
  { id: 2, username: 'user2', projectId: 2 },
];

app.use(bodyParser.json());


app.get('/projects', (req, res) => {
  res.json(projects);
});


app.get('/user/:userId/project', (req, res) => {
  const userId = parseInt(req.params.userId);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).send('Pengguna tidak ditemukan');
  }

  const projectId = user.projectId;
  const project = projects.find((p) => p.id === projectId);

  if (project) {
    res.json(project);
  } else {
    res.status(404).send('Proyek tidak ditemukan');
  }
});


app.post('/user/:userId/create-project', (req, res) => {
  const userId = parseInt(req.params.userId);
  const { projectName } = req.body;

  
  const newProject = { id: projects.length + 1, name: projectName };
  projects.push(newProject);


  const user = users.find((u) => u.id === userId);
  if (user) {
    user.projectId = newProject.id;
    res.json(newProject);
  } else {
    res.status(404).send('Pengguna tidak ditemukan');
  }
});

app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
