var docs = {
ArithmeticError:"Base class for arithmetic errors.",
AssertionError:"Assertion failed.",
AttributeError:"Attribute not found.",
BaseException:"Common base class for all exceptions",
BaseExceptionGroup:"A combination of multiple unrelated exceptions.",
BlockingIOError:"I/O operation would block.",
BrokenPipeError:"Broken pipe.",
BufferError:"Buffer error.",
BytesWarning:"Base class for warnings about bytes and buffer related problems, mostly\nrelated to conversion from str or comparing to str.",
ChildProcessError:"Child process error.",
ConnectionAbortedError:"Connection aborted.",
ConnectionError:"Connection error.",
ConnectionRefusedError:"Connection refused.",
ConnectionResetError:"Connection reset.",
DeprecationWarning:"Base class for warnings about deprecated features.",
EOFError:"Read beyond end of file.",
Ellipsis:"",
EncodingWarning:"Base class for warnings about encodings.",
EnvironmentError:"Base class for I/O related errors.",
Exception:"Common base class for all non-exit exceptions.",
ExceptionGroup:"",
False:"bool(x) -> bool\n\nReturns True when the argument x is true, False otherwise.\nThe builtins True and False are the only two instances of the class bool.\nThe class bool is a subclass of the class int, and cannot be subclassed.",
FileExistsError:"File already exists.",
FileNotFoundError:"File not found.",
FloatingPointError:"Floating point operation failed.",
FutureWarning:"Base class for warnings about constructs that will change semantically\nin the future.",
GeneratorExit:"Request that a generator exit.",
IOError:"Base class for I/O related errors.",
ImportError:"Import can't find module, or can't find name in module.",
ImportWarning:"Base class for warnings about probable mistakes in module imports",
IndentationError:"Improper indentation.",
IndexError:"Sequence index out of range.",
InterruptedError:"Interrupted by signal.",
IsADirectoryError:"Operation doesn't work on directories.",
KeyError:"Mapping key not found.",
KeyboardInterrupt:"Program interrupted by user.",
LookupError:"Base class for lookup errors.",
MemoryError:"Out of memory.",
ModuleNotFoundError:"Module not found.",
NameError:"Name not found globally.",
None:"",
NotADirectoryError:"Operation only works on directories.",
NotImplemented:"",
NotImplementedError:"Method or function hasn't been implemented yet.",
OSError:"Base class for I/O related errors.",
OverflowError:"Result too large to be represented.",
PendingDeprecationWarning:"Base class for warnings about features which will be deprecated\nin the future.",
PermissionError:"Not enough permissions.",
ProcessLookupError:"Process not found.",
RecursionError:"Recursion limit exceeded.",
ReferenceError:"Weak ref proxy used after referent went away.",
ResourceWarning:"Base class for warnings about resource usage.",
RuntimeError:"Unspecified run-time error.",
RuntimeWarning:"Base class for warnings about dubious runtime behavior.",
StopAsyncIteration:"Signal the end from iterator.__anext__().",
StopIteration:"Signal the end from iterator.__next__().",
SyntaxError:"Invalid syntax.",
SyntaxWarning:"Base class for warnings about dubious syntax.",
SystemError:"Internal error in the Python interpreter.\n\nPlease report this to the Python maintainer, along with the traceback,\nthe Python version, and the hardware/OS platform and version.",
SystemExit:"Request to exit from the interpreter.",
TabError:"Improper mixture of spaces and tabs.",
TimeoutError:"Timeout expired.",
True:"bool(x) -> bool\n\nReturns True when the argument x is true, False otherwise.\nThe builtins True and False are the only two instances of the class bool.\nThe class bool is a subclass of the class int, and cannot be subclassed.",
TypeError:"Inappropriate argument type.",
UnboundLocalError:"Local name referenced but not bound to a value.",
UnicodeDecodeError:"Unicode decoding error.",
UnicodeEncodeError:"Unicode encoding error.",
UnicodeError:"Unicode related error.",
UnicodeTranslateError:"Unicode translation error.",
UnicodeWarning:"Base class for warnings about Unicode related problems, mostly\nrelated to conversion problems.",
UserWarning:"Base class for warnings generated by user code.",
ValueError:"Inappropriate argument value (of correct type).",
Warning:"Base class for warning categories.",
WindowsError:"Base class for I/O related errors.",
ZeroDivisionError:"Second argument to a division or modulo operation was zero.",
__debug__:"bool(x) -> bool\n\nReturns True when the argument x is true, False otherwise.\nThe builtins True and False are the only two instances of the class bool.\nThe class bool is a subclass of the class int, and cannot be subclassed.",
abs:"Return the absolute value of the argument.",
aiter:"Return an AsyncIterator for an AsyncIterable object.",
all:"Return True if bool(x) is True for all values x in the iterable.\n\nIf the iterable is empty, return True.",
anext:"async anext(aiterator[, default])\n\nReturn the next item from the async iterator.  If default is given and the async\niterator is exhausted, it is returned instead of raising StopAsyncIteration.",
any:"Return True if bool(x) is True for any x in the iterable.\n\nIf the iterable is empty, return False.",
ascii:"Return an ASCII-only representation of an object.\n\nAs repr(), return a string containing a printable representation of an\nobject, but escape the non-ASCII characters in the string returned by\nrepr() using \\\\x, \\\\u or \\\\U escapes. This generates a string similar\nto that returned by repr() in Python 2.",
bin:"Return the binary representation of an integer.\n\n   >>> bin(2796202)\n   '0b1010101010101010101010'",
bool:"bool(x) -> bool\n\nReturns True when the argument x is true, False otherwise.\nThe builtins True and False are the only two instances of the class bool.\nThe class bool is a subclass of the class int, and cannot be subclassed.",
breakpoint:"breakpoint(*args, **kws)\n\nCall sys.breakpointhook(*args, **kws).  sys.breakpointhook() must accept\nwhatever arguments are passed.\n\nBy default, this drops you into the pdb debugger.",
bytearray:"bytearray(iterable_of_ints) -> bytearray\nbytearray(string, encoding[, errors]) -> bytearray\nbytearray(bytes_or_buffer) -> mutable copy of bytes_or_buffer\nbytearray(int) -> bytes array of size given by the parameter initialized with null bytes\nbytearray() -> empty bytes array\n\nConstruct a mutable bytearray object from:\n  - an iterable yielding integers in range(256)\n  - a text string encoded using the specified encoding\n  - a bytes or a buffer object\n  - any object implementing the buffer API.\n  - an integer",
bytes:"bytes(iterable_of_ints) -> bytes\nbytes(string, encoding[, errors]) -> bytes\nbytes(bytes_or_buffer) -> immutable copy of bytes_or_buffer\nbytes(int) -> bytes object of size given by the parameter initialized with null bytes\nbytes() -> empty bytes object\n\nConstruct an immutable array of bytes from:\n  - an iterable yielding integers in range(256)\n  - a text string encoded using the specified encoding\n  - any object implementing the buffer API.\n  - an integer",
callable:"Return whether the object is callable (i.e., some kind of function).\n\nNote that classes are callable, as are instances of classes with a\n__call__() method.",
chr:"Return a Unicode string of one character with ordinal i; 0 <= i <= 0x10ffff.",
classmethod:"classmethod(function) -> method\n\nConvert a function to be a class method.\n\nA class method receives the class as implicit first argument,\njust like an instance method receives the instance.\nTo declare a class method, use this idiom:\n\n  class C:\n      @classmethod\n      def f(cls, arg1, arg2, ...):\n          ...\n\nIt can be called either on the class (e.g. C.f()) or on an instance\n(e.g. C().f()).  The instance is ignored except for its class.\nIf a class method is called for a derived class, the derived class\nobject is passed as the implied first argument.\n\nClass methods are different than C++ or Java static methods.\nIf you want those, see the staticmethod builtin.",
compile:"Compile source into a code object that can be executed by exec() or eval().\n\nThe source code may represent a Python module, statement or expression.\nThe filename will be used for run-time error messages.\nThe mode must be 'exec' to compile a module, 'single' to compile a\nsingle (interactive) statement, or 'eval' to compile an expression.\nThe flags argument, if present, controls which future statements influence\nthe compilation of the code.\nThe dont_inherit argument, if true, stops the compilation inheriting\nthe effects of any future statements in effect in the code calling\ncompile; if absent or false these statements do influence the compilation,\nin addition to any features explicitly specified.",
complex:"Create a complex number from a real part and an optional imaginary part.\n\nThis is equivalent to (real + imag*1j) where imag defaults to 0.",
copyright:"interactive prompt objects for printing the license text, a list of\n    contributors and the copyright notice.",
credits:"interactive prompt objects for printing the license text, a list of\n    contributors and the copyright notice.",
delattr:"Deletes the named attribute from the given object.\n\ndelattr(x, 'y') is equivalent to ``del x.y''",
dict:"dict() -> new empty dictionary\ndict(mapping) -> new dictionary initialized from a mapping object's\n    (key, value) pairs\ndict(iterable) -> new dictionary initialized as if via:\n    d = {}\n    for k, v in iterable:\n        d[k] = v\ndict(**kwargs) -> new dictionary initialized with the name=value pairs\n    in the keyword argument list.  For example:  dict(one=1, two=2)",
dir:"dir([object]) -> list of strings\n\nIf called without an argument, return the names in the current scope.\nElse, return an alphabetized list of names comprising (some of) the attributes\nof the given object, and of attributes reachable from it.\nIf the object supplies a method named __dir__, it will be used; otherwise\nthe default dir() logic is used and returns:\n  for a module object: the module's attributes.\n  for a class object:  its attributes, and recursively the attributes\n    of its bases.\n  for any other object: its attributes, its class's attributes, and\n    recursively the attributes of its class's base classes.",
divmod:"Return the tuple (x//y, x%y).  Invariant: div*y + mod == x.",
enumerate:"Return an enumerate object.\n\n  iterable\n    an object supporting iteration\n\nThe enumerate object yields pairs containing a count (from start, which\ndefaults to zero) and a value yielded by the iterable argument.\n\nenumerate is useful for obtaining an indexed list:\n    (0, seq[0]), (1, seq[1]), (2, seq[2]), ...",
eval:"Evaluate the given source in the context of globals and locals.\n\nThe source may be a string representing a Python expression\nor a code object as returned by compile().\nThe globals must be a dictionary and locals can be any mapping,\ndefaulting to the current globals and locals.\nIf only globals is given, locals defaults to it.",
exec:"Execute the given source in the context of globals and locals.\n\nThe source may be a string representing one or more Python statements\nor a code object as returned by compile().\nThe globals must be a dictionary and locals can be any mapping,\ndefaulting to the current globals and locals.\nIf only globals is given, locals defaults to it.\nThe closure must be a tuple of cellvars, and can only be used\nwhen source is a code object requiring exactly that many cellvars.",
exit:"",
filter:"filter(function or None, iterable) --> filter object\n\nReturn an iterator yielding those items of iterable for which function(item)\nis true. If function is None, return the items that are true.",
float:"Convert a string or number to a floating point number, if possible.",
format:"Return value.__format__(format_spec)\n\nformat_spec defaults to the empty string.\nSee the Format Specification Mini-Language section of help('FORMATTING') for\ndetails.",
frozenset:"frozenset() -> empty frozenset object\nfrozenset(iterable) -> frozenset object\n\nBuild an immutable unordered collection of unique elements.",
getattr:"getattr(object, name[, default]) -> value\n\nGet a named attribute from an object; getattr(x, 'y') is equivalent to x.y.\nWhen a default argument is given, it is returned when the attribute doesn't\nexist; without it, an exception is raised in that case.",
globals:"Return the dictionary containing the current scope's global variables.\n\nNOTE: Updates to this dictionary *will* affect name lookups in the current\nglobal scope and vice-versa.",
hasattr:"Return whether the object has an attribute with the given name.\n\nThis is done by calling getattr(obj, name) and catching AttributeError.",
hash:"Return the hash value for the given object.\n\nTwo objects that compare equal must also have the same hash value, but the\nreverse is not necessarily true.",
help:"Define the builtin 'help'.\n\n    This is a wrapper around pydoc.help that provides a helpful message\n    when 'help' is typed at the Python interactive prompt.\n\n    Calling help() at the Python prompt starts an interactive help session.\n    Calling help(thing) prints help for the python object 'thing'.\n    ",
hex:"Return the hexadecimal representation of an integer.\n\n   >>> hex(12648430)\n   '0xc0ffee'",
id:"Return the identity of an object.\n\nThis is guaranteed to be unique among simultaneously existing objects.\n(CPython uses the object's memory address.)",
input:"Read a string from standard input.  The trailing newline is stripped.\n\nThe prompt string, if given, is printed to standard output without a\ntrailing newline before reading input.\n\nIf the user hits EOF (*nix: Ctrl-D, Windows: Ctrl-Z+Return), raise EOFError.\nOn *nix systems, readline is used if available.",
int:"int([x]) -> integer\nint(x, base=10) -> integer\n\nConvert a number or string to an integer, or return 0 if no arguments\nare given.  If x is a number, return x.__int__().  For floating point\nnumbers, this truncates towards zero.\n\nIf x is not a number or if base is given, then x must be a string,\nbytes, or bytearray instance representing an integer literal in the\ngiven base.  The literal can be preceded by '+' or '-' and be surrounded\nby whitespace.  The base defaults to 10.  Valid bases are 0 and 2-36.\nBase 0 means to interpret the base from the string as an integer literal.\n>>> int('0b100', base=0)\n4",
isinstance:"Return whether an object is an instance of a class or of a subclass thereof.\n\nA tuple, as in ``isinstance(x, (A, B, ...))``, may be given as the target to\ncheck against. This is equivalent to ``isinstance(x, A) or isinstance(x, B)\nor ...`` etc.",
issubclass:"Return whether 'cls' is derived from another class or is the same class.\n\nA tuple, as in ``issubclass(x, (A, B, ...))``, may be given as the target to\ncheck against. This is equivalent to ``issubclass(x, A) or issubclass(x, B)\nor ...``.",
iter:"iter(iterable) -> iterator\niter(callable, sentinel) -> iterator\n\nGet an iterator from an object.  In the first form, the argument must\nsupply its own iterator, or be a sequence.\nIn the second form, the callable is called until it returns the sentinel.",
len:"Return the number of items in a container.",
license:"interactive prompt objects for printing the license text, a list of\n    contributors and the copyright notice.",
list:"Built-in mutable sequence.\n\nIf no argument is given, the constructor creates a new empty list.\nThe argument must be an iterable if specified.",
locals:"Return a dictionary containing the current scope's local variables.\n\nNOTE: Whether or not updates to this dictionary will affect name lookups in\nthe local scope and vice-versa is *implementation dependent* and not\ncovered by any backwards compatibility guarantees.",
map:"map(func, *iterables) --> map object\n\nMake an iterator that computes the function using arguments from\neach of the iterables.  Stops when the shortest iterable is exhausted.",
max:"max(iterable, *[, default=obj, key=func]) -> value\nmax(arg1, arg2, *args, *[, key=func]) -> value\n\nWith a single iterable argument, return its biggest item. The\ndefault keyword-only argument specifies an object to return if\nthe provided iterable is empty.\nWith two or more arguments, return the largest argument.",
memoryview:"Create a new memoryview object which references the given object.",
min:"min(iterable, *[, default=obj, key=func]) -> value\nmin(arg1, arg2, *args, *[, key=func]) -> value\n\nWith a single iterable argument, return its smallest item. The\ndefault keyword-only argument specifies an object to return if\nthe provided iterable is empty.\nWith two or more arguments, return the smallest argument.",
next:"next(iterator[, default])\n\nReturn the next item from the iterator. If default is given and the iterator\nis exhausted, it is returned instead of raising StopIteration.",
object:"The base class of the class hierarchy.\n\nWhen called, it accepts no arguments and returns a new featureless\ninstance that has no instance attributes and cannot be given any.\n",
oct:"Return the octal representation of an integer.\n\n   >>> oct(342391)\n   '0o1234567'",
open:"Open file and return a stream.  Raise OSError upon failure.\n\nfile is either a text or byte string giving the name (and the path\nif the file isn't in the current working directory) of the file to\nbe opened or an integer file descriptor of the file to be\nwrapped. (If a file descriptor is given, it is closed when the\nreturned I/O object is closed, unless closefd is set to False.)\n\nmode is an optional string that specifies the mode in which the file\nis opened. It defaults to 'r' which means open for reading in text\nmode.  Other common values are 'w' for writing (truncating the file if\nit already exists), 'x' for creating and writing to a new file, and\n'a' for appending (which on some Unix systems, means that all writes\nappend to the end of the file regardless of the current seek position).\nIn text mode, if encoding is not specified the encoding used is platform\ndependent: locale.getencoding() is called to get the current locale encoding.\n(For reading and writing raw bytes use binary mode and leave encoding\nunspecified.) The available modes are:\n\n========= ===============================================================\nCharacter Meaning\n--------- ---------------------------------------------------------------\n'r'       open for reading (default)\n'w'       open for writing, truncating the file first\n'x'       create a new file and open it for writing\n'a'       open for writing, appending to the end of the file if it exists\n'b'       binary mode\n't'       text mode (default)\n'+'       open a disk file for updating (reading and writing)\n========= ===============================================================\n\nThe default mode is 'rt' (open for reading text). For binary random\naccess, the mode 'w+b' opens and truncates the file to 0 bytes, while\n'r+b' opens the file without truncation. The 'x' mode implies 'w' and\nraises an `FileExistsError` if the file already exists.\n\nPython distinguishes between files opened in binary and text modes,\neven when the underlying operating system doesn't. Files opened in\nbinary mode (appending 'b' to the mode argument) return contents as\nbytes objects without any decoding. In text mode (the default, or when\n't' is appended to the mode argument), the contents of the file are\nreturned as strings, the bytes having been first decoded using a\nplatform-dependent encoding or using the specified encoding if given.\n\nbuffering is an optional integer used to set the buffering policy.\nPass 0 to switch buffering off (only allowed in binary mode), 1 to select\nline buffering (only usable in text mode), and an integer > 1 to indicate\nthe size of a fixed-size chunk buffer.  When no buffering argument is\ngiven, the default buffering policy works as follows:\n\n* Binary files are buffered in fixed-size chunks; the size of the buffer\n  is chosen using a heuristic trying to determine the underlying device's\n  \"block size\" and falling back on `io.DEFAULT_BUFFER_SIZE`.\n  On many systems, the buffer will typically be 4096 or 8192 bytes long.\n\n* \"Interactive\" text files (files for which isatty() returns True)\n  use line buffering.  Other text files use the policy described above\n  for binary files.\n\nencoding is the name of the encoding used to decode or encode the\nfile. This should only be used in text mode. The default encoding is\nplatform dependent, but any encoding supported by Python can be\npassed.  See the codecs module for the list of supported encodings.\n\nerrors is an optional string that specifies how encoding errors are to\nbe handled---this argument should not be used in binary mode. Pass\n'strict' to raise a ValueError exception if there is an encoding error\n(the default of None has the same effect), or pass 'ignore' to ignore\nerrors. (Note that ignoring encoding errors can lead to data loss.)\nSee the documentation for codecs.register or run 'help(codecs.Codec)'\nfor a list of the permitted encoding error strings.\n\nnewline controls how universal newlines works (it only applies to text\nmode). It can be None, '', '\\n', '\\r', and '\\r\\n'.  It works as\nfollows:\n\n* On input, if newline is None, universal newlines mode is\n  enabled. Lines in the input can end in '\\n', '\\r', or '\\r\\n', and\n  these are translated into '\\n' before being returned to the\n  caller. If it is '', universal newline mode is enabled, but line\n  endings are returned to the caller untranslated. If it has any of\n  the other legal values, input lines are only terminated by the given\n  string, and the line ending is returned to the caller untranslated.\n\n* On output, if newline is None, any '\\n' characters written are\n  translated to the system default line separator, os.linesep. If\n  newline is '' or '\\n', no translation takes place. If newline is any\n  of the other legal values, any '\\n' characters written are translated\n  to the given string.\n\nIf closefd is False, the underlying file descriptor will be kept open\nwhen the file is closed. This does not work when a file name is given\nand must be True in that case.\n\nA custom opener can be used by passing a callable as *opener*. The\nunderlying file descriptor for the file object is then obtained by\ncalling *opener* with (*file*, *flags*). *opener* must return an open\nfile descriptor (passing os.open as *opener* results in functionality\nsimilar to passing None).\n\nopen() returns a file object whose type depends on the mode, and\nthrough which the standard file operations such as reading and writing\nare performed. When open() is used to open a file in a text mode ('w',\n'r', 'wt', 'rt', etc.), it returns a TextIOWrapper. When used to open\na file in a binary mode, the returned class varies: in read binary\nmode, it returns a BufferedReader; in write binary and append binary\nmodes, it returns a BufferedWriter, and in read/write mode, it returns\na BufferedRandom.\n\nIt is also possible to use a string or bytearray as a file for both\nreading and writing. For strings StringIO can be used like a file\nopened in a text mode, and for bytes a BytesIO can be used like a file\nopened in a binary mode.",
ord:"Return the Unicode code point for a one-character string.",
pow:"Equivalent to base**exp with 2 arguments or base**exp % mod with 3 arguments\n\nSome types, such as ints, are able to use a more efficient algorithm when\ninvoked using the three argument form.",
print:"Prints the values to a stream, or to sys.stdout by default.\n\n  sep\n    string inserted between values, default a space.\n  end\n    string appended after the last value, default a newline.\n  file\n    a file-like object (stream); defaults to the current sys.stdout.\n  flush\n    whether to forcibly flush the stream.",
property:"Property attribute.\n\n  fget\n    function to be used for getting an attribute value\n  fset\n    function to be used for setting an attribute value\n  fdel\n    function to be used for del'ing an attribute\n  doc\n    docstring\n\nTypical use is to define a managed attribute x:\n\nclass C(object):\n    def getx(self): return self._x\n    def setx(self, value): self._x = value\n    def delx(self): del self._x\n    x = property(getx, setx, delx, \"I'm the 'x' property.\")\n\nDecorators make defining new properties or modifying existing ones easy:\n\nclass C(object):\n    @property\n    def x(self):\n        \"I am the 'x' property.\"\n        return self._x\n    @x.setter\n    def x(self, value):\n        self._x = value\n    @x.deleter\n    def x(self):\n        del self._x",
quit:"",
range:"range(stop) -> range object\nrange(start, stop[, step]) -> range object\n\nReturn an object that produces a sequence of integers from start (inclusive)\nto stop (exclusive) by step.  range(i, j) produces i, i+1, i+2, ..., j-1.\nstart defaults to 0, and stop is omitted!  range(4) produces 0, 1, 2, 3.\nThese are exactly the valid indices for a list of 4 elements.\nWhen step is given, it specifies the increment (or decrement).",
repr:"Return the canonical string representation of the object.\n\nFor many object types, including most builtins, eval(repr(obj)) == obj.",
reversed:"Return a reverse iterator over the values of the given sequence.",
round:"Round a number to a given precision in decimal digits.\n\nThe return value is an integer if ndigits is omitted or None.  Otherwise\nthe return value has the same type as the number.  ndigits may be negative.",
set:"set() -> new empty set object\nset(iterable) -> new set object\n\nBuild an unordered collection of unique elements.",
setattr:"Sets the named attribute on the given object to the specified value.\n\nsetattr(x, 'y', v) is equivalent to ``x.y = v''",
slice:"slice(stop)\nslice(start, stop[, step])\n\nCreate a slice object.  This is used for extended slicing (e.g. a[0:10:2]).",
sorted:"Return a new list containing all items from the iterable in ascending order.\n\nA custom key function can be supplied to customize the sort order, and the\nreverse flag can be set to request the result in descending order.",
staticmethod:"staticmethod(function) -> method\n\nConvert a function to be a static method.\n\nA static method does not receive an implicit first argument.\nTo declare a static method, use this idiom:\n\n     class C:\n         @staticmethod\n         def f(arg1, arg2, ...):\n             ...\n\nIt can be called either on the class (e.g. C.f()) or on an instance\n(e.g. C().f()). Both the class and the instance are ignored, and\nneither is passed implicitly as the first argument to the method.\n\nStatic methods in Python are similar to those found in Java or C++.\nFor a more advanced concept, see the classmethod builtin.",
str:"str(object='') -> str\nstr(bytes_or_buffer[, encoding[, errors]]) -> str\n\nCreate a new string object from the given object. If encoding or\nerrors is specified, then the object must expose a data buffer\nthat will be decoded using the given encoding and error handler.\nOtherwise, returns the result of object.__str__() (if defined)\nor repr(object).\nencoding defaults to sys.getdefaultencoding().\nerrors defaults to 'strict'.",
sum:"Return the sum of a 'start' value (default: 0) plus an iterable of numbers\n\nWhen the iterable is empty, return the start value.\nThis function is intended specifically for use with numeric values and may\nreject non-numeric types.",
super:"super() -> same as super(__class__, <first argument>)\nsuper(type) -> unbound super object\nsuper(type, obj) -> bound super object; requires isinstance(obj, type)\nsuper(type, type2) -> bound super object; requires issubclass(type2, type)\nTypical use to call a cooperative superclass method:\nclass C(B):\n    def meth(self, arg):\n        super().meth(arg)\nThis works for class methods too:\nclass C(B):\n    @classmethod\n    def cmeth(cls, arg):\n        super().cmeth(arg)\n",
tuple:"Built-in immutable sequence.\n\nIf no argument is given, the constructor returns an empty tuple.\nIf iterable is specified the tuple is initialized from iterable's items.\n\nIf the argument is a tuple, the return value is the same object.",
type:"type(object) -> the object's type\ntype(name, bases, dict, **kwds) -> a new type",
vars:"vars([object]) -> dictionary\n\nWithout arguments, equivalent to locals().\nWith an argument, equivalent to object.__dict__.",
zip:"zip(*iterables, strict=False) --> Yield tuples until an input is exhausted.\n\n   >>> list(zip('abcdefg', range(3), range(4)))\n   [('a', 0, 0), ('b', 1, 1), ('c', 2, 2)]\n\nThe zip object yields n-length tuples, where n is the number of iterables\npassed as positional arguments to zip().  The i-th element in every tuple\ncomes from the i-th iterable argument to zip().  This continues until the\nshortest argument is exhausted.\n\nIf strict is true and one of the arguments is exhausted before the others,\nraise a ValueError.",
}
for(var key in docs){
    if(__BRYTHON__.builtins[key]){
        __BRYTHON__.builtins[key].__doc__ = docs[key]
    }
}