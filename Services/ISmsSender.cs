using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Day6_Angular_1.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
