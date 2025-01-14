﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using fedjobs.Models;
using fedjobs.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace fedjobs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        // Define private properties for the PostController to link the relevant repositories.
        private readonly IJobRepository _jobRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        

        // Create a Constructor Method to instantiate the controller
        public JobController(IJobRepository jobRepository, IUserProfileRepository userProfileRepository)
        {
            _jobRepository = jobRepository;
            _userProfileRepository = userProfileRepository;
            
        }
        // GET: api/<JobController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("MyJobs/{UserId}")]
        public IActionResult MyJobs(int UserId)
        {
            // Use the "GetPostsByUserId" method in the PostRepository.cs
            // repository to retrieve all of the posts in the database
            // that have the same Post.UserId as the User who is currently
            // logged in (retrieve current User's Id from SessionStorage 
            // on client-side.)
            var jobs = _jobRepository.GetJobsByUserId(UserId);
            return Ok(jobs);
        }

        // GET api/<JobController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        //POST api/<jobcontroller>
        [HttpPost]
        public IActionResult Job(Job job)
        {
            _jobRepository.Add(job);
            return Ok(job);
        }

        //// PUT api/<JobController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<JobController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
