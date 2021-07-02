using fedjobs.Models;
using System.Collections.Generic;

namespace fedjobs.Repositories
{
    public interface IJobRepository
    {
        //void Add(Job job);
        List<Job> GetJobsByUserId(int id);
    }
}