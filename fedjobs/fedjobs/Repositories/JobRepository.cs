using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using fedjobs.Models;
using Microsoft.Extensions.Configuration;


namespace fedjobs.Repositories
{
    public class JobRepository : BaseRepository, IJobRepository
    {
        public JobRepository(IConfiguration configuration) : base(configuration) { }

        // Define a public method to retrieve Posts from the database that correspond to a
        // particular userId and return a list of posts.
        public List<Job> GetJobsByUserId(int UserId)
        {
            // Define a variable to identify the database connection
            // ("Connection" comes from the BaseRepository.cs)
            using (var conn = Connection)
            {
                // Open the connection to the database.
                conn.Open();
                // Instantiate a variable called cmd to use as short-hand for defining the SQL query.
                using (var cmd = conn.CreateCommand())
                {
                    // Define the SQL query. Select Post, Category, UserProfile, and UserType.
                    // Join Category on Post via CategoryId
                    // Join UserProfile on Post via UserProfileId
                    // Join UserType on UserProfile via UserTypeId
                    // Only Select Entries WHERE the UserId = the current user's Id
                    // Order by descending (chronological) 
                    cmd.CommandText = @"SELECT j.Id, j.UserId, j.JobId, j.Title, j.Link, 
                              j.Location,
                              j.Organization, j.Department, j.Category,
                              j.Schedule, j.Requirements,
                              j.Duties,
                              j.DateOpened, j.DateClose,Education
                        From Job j
                                LEFT JOIN UserProfile u ON j.UserId = u.id
                        WHERE u.Id = @id";

                    // Attach the UserId parameter to the SQL Query using SQLConnection provided methods
                    cmd.Parameters.AddWithValue("@id", UserId);

                    // Execute the Query
                    var reader = cmd.ExecuteReader();

                    // Instantiate a new list of posts
                    List<Job> jobs = new List<Job>();

                    // While there are new rows of entries in the reader,
                    while (reader.Read())
                    {
                        // Use the defined method "NewPostFromReader" (defined below)
                        // to add a new Post object to the List of Posts
                        jobs.Add(NewJobFromReader(reader));
                       
                    }

                    // Close the connection to the database
                    reader.Close();

                    // return the list of posts
                    return jobs;
                }
            }
        }

        public void Add(Job job)
        {
            // Define a variable to identify the database connection
            // ("Connection" comes from the BaseRepository.cs)
            using (var conn = Connection)
            {
                // Open the connection to the database.
                conn.Open();
                // Instantiate a variable called cmd to use as short-hand for defining the SQL query.
                using (var cmd = conn.CreateCommand())
                {
                    // Define the SQL query. Select Post, Category, UserProfile, and UserType.
                    // Join Category on Post via CategoryId
                    // Join UserProfile on Post via UserProfileId
                    // Join UserType on UserProfile via UserTypeId
                    // Only Select Entries WHERE the UserId = the current user's Id
                    // Order by descending (chronological) 
                    cmd.CommandText = @"
                            INSERT INTO JOB (
                                UserId, JobId, Title, Link, 
                              Location,
                              Organization, Department, Category,
                              Schedule, Requirements,
                              Duties, DateOpened, DateClose,Education)
                        
                        VALUES (@UserId, @JobId, @Title, @Link, 
                              @Location,
                              @Organization, @Department, @Category,
                              @Schedule, @Requirements,
                              @Duties, @DateOpened, @DateClose, @Education)";

                    // Attach the UserId parameter to the SQL Query using SQLConnection provided methods
                    cmd.Parameters.AddWithValue("@UserId", job.UserId);
                    cmd.Parameters.AddWithValue("@JobId", job.JobId);
                    cmd.Parameters.AddWithValue("@Title", job.Title);
                    cmd.Parameters.AddWithValue("@Link", job.Link);
                    cmd.Parameters.AddWithValue("@Organization", job.Organization);
                    cmd.Parameters.AddWithValue("@Location", job.Location);
                    cmd.Parameters.AddWithValue("@Department", job.Department);
                    cmd.Parameters.AddWithValue("@Category", job.Category);
                    cmd.Parameters.AddWithValue("@Schedule", job.Schedule);
                    cmd.Parameters.AddWithValue("@Requirements", job.Requirements);
                    cmd.Parameters.AddWithValue("@Duties", job.Duties);
                    cmd.Parameters.AddWithValue("@DateOpened", job.DateOpened);
                    cmd.Parameters.AddWithValue("@DateClose", job.DateClose);
                    cmd.Parameters.AddWithValue("@Education", job.Education);


                    //job.Id = (int)cmd.ExecuteScalar();

                    cmd.ExecuteNonQuery();

                }
            }
        }

        private Job NewJobFromReader(SqlDataReader reader)
        {
            return new Job()
            {   
                Id = reader.GetInt32(reader.GetOrdinal("Id")),
                UserId = reader.GetInt32(reader.GetOrdinal("UserId")),
                JobId = reader.GetString(reader.GetOrdinal("JobId")),
                Title = reader.GetString(reader.GetOrdinal("Title")),
                Link = reader.GetString(reader.GetOrdinal("Link")),
                Organization = reader.GetString(reader.GetOrdinal("Organization")),
                Department = reader.GetString(reader.GetOrdinal("Department")),
                Category = reader.GetString(reader.GetOrdinal("Category")),
                Location = reader.GetString(reader.GetOrdinal("Location")),
                DateOpened = reader.GetDateTime(reader.GetOrdinal("DateOpened")),
                DateClose = reader.GetDateTime(reader.GetOrdinal("DateClose")),
                Schedule = reader.GetString(reader.GetOrdinal("Schedule")),
                Requirements = reader.GetString(reader.GetOrdinal("Requirements")),
                Duties = reader.GetString(reader.GetOrdinal("Duties")),
                Education = reader.GetString(reader.GetOrdinal("Education"))


            };
        }
    }
}
       

        //public void Add(UserProfile userProfile)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"INSERT INTO UserProfile (FirebaseUserId, FirstName, LastName, DisplayName, 
        //                                                         Email, CreateDateTime)
        //                                OUTPUT INSERTED.ID
        //                                VALUES (@FirebaseUserId, @FirstName, @LastName, @DisplayName, 
        //                                        @Email, @CreateDateTime)";
        //            DbUtils.AddParameter(cmd, "@FirebaseUserId", userProfile.FirebaseUserId);
        //            DbUtils.AddParameter(cmd, "@FirstName", userProfile.FirstName);
        //            DbUtils.AddParameter(cmd, "@LastName", userProfile.LastName);
        //            DbUtils.AddParameter(cmd, "@DisplayName", userProfile.DisplayName);
        //            DbUtils.AddParameter(cmd, "@Email", userProfile.Email);
        //            DbUtils.AddParameter(cmd, "@CreateDateTime", userProfile.CreateDateTime);


        //            userProfile.Id = (int)cmd.ExecuteScalar();
        //        }
        //    }
        //}

        /*
        public UserProfile GetByFirebaseUserId(string firebaseUserId)
        {
            return _context.UserProfile
                       .Include(up => up.UserType) 
                       .FirstOrDefault(up => up.FirebaseUserId == firebaseUserId);
        }

        public void Add(UserProfile userProfile)
        {
            _context.Add(userProfile);
            _context.SaveChanges();
        }
        */
    
    




