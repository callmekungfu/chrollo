import inquirer from 'inquirer';

const shouldPlayNextEpisode = async () => {
  const { shouldPlayNext } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'shouldPlayNext',
      message: `Play the next episode?`
    }
  ]);
  return shouldPlayNext;
};

export default shouldPlayNextEpisode;
